
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { TRPCClientError } from '@trpc/client';
import { type NextRequest, NextResponse } from 'next/server';
import { db } from '~/server/db'


export const dynamic = 'force-dynamic'
export async function GET(req: NextRequest) {

    try {
        const authHeader = req.headers.get('authorization')?.split(" ")[1];

        const confirm = await db.apiKey.findFirst({
            where: {
                key: authHeader
            }
        })

        if (!confirm) {
            return NextResponse.json(
                { message: 'Authorization header missing' },
                { status: 401 }
            );
        }
        const data: CategoryProps[] = await db.category.findMany()

        return NextResponse.json({ categories: data }, { status: 202 });
    } catch (error) {
        console.log(error)
        if (error instanceof SyntaxError) {
            console.log('syntax error', error)
            return NextResponse.json({ message: error.message }, { status: 500 });
        }
        else if (error instanceof TRPCClientError) {
            console.error(error.message)
            return NextResponse.json({ message: error.message }, { status: 500 })
        }
        else if (error instanceof Error) {
            console.error(error.message)
            return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
        }
        else if (error instanceof PrismaClientKnownRequestError) {
            console.error(error.message)
            return NextResponse.json({ message: error.message }, { status: 500 })
        }
    }
}
