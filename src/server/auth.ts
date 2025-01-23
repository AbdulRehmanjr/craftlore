import {
    getServerSession,
    type DefaultSession,
    type NextAuthOptions,
} from "next-auth";
import { db } from "~/server/db";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { TRPCClientError } from "@trpc/client";
import { env } from "~/env";

declare module "next-auth" {
    interface Session extends DefaultSession, User {
        user: {
            id: string
            role: string
            accountId: string
        } & DefaultSession["user"];
    }

    interface User {
        role: string;
        accountId: string
    }

}

export const authOptions: NextAuthOptions = {
    callbacks: {
        session({ session, user, token }) {
            const { email, role, accountId } = token;
            if (token)
                return {
                    ...session,
                    user: {
                        ...session.user,
                        email: email,
                        accountId: accountId,
                        role: role,
                    },
                };
            return { ...session }
        },
        jwt({ token, user }) {
            if (user) {
                token.email = user.email
                token.role = user.role
                token.accountId = user.accountId
                return token
            }
            return token
        },
    },
    session: { strategy: "jwt" },
    pages: {
        signIn: "/",
    },
    secret: env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "email", placeholder: "Abdul Rehman" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {

                    if (!credentials?.email || !credentials?.password) return null;

                    const userInfo = await db.account.findUnique({ where: { email: credentials.email } })

                    if (!userInfo)
                        throw new TRPCClientError("User not found.")

                    const result: boolean = await compare(credentials.password, userInfo.password)

                    if (!result)
                        throw new TRPCClientError("Password didn't match.");

                    return {
                        id: userInfo.accountId,
                        email: userInfo.email,
                        role: userInfo.role,
                        accountId: userInfo.accountId
                    }

                } catch (error) {
                    if (error instanceof TRPCClientError)
                        console.error(error)
                    else
                        console.error(error)
                    return null

                }
            },
        }),
    ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
