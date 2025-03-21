
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { TRPCClientError } from '@trpc/client';
import { type NextRequest, NextResponse } from 'next/server';
import { db } from '~/server/db'


export const dynamic = 'force-dynamic'
export async function GET(req: NextRequest, { params }: { params: { subcategoryId: string } }) {

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

        const sections = await db.carbonSection.findMany({
            where: { subCategoryId: params.subcategoryId },
            include: {
                CarbonValue: {
                    select: {
                        name: true,
                    }
                }
            },
        });
        const uniqueNamesBySection = sections.map((section) => {
            const uniqueNames = [
                ...new Set(section.CarbonValue.map((value) => value.name))
            ];
            return {
                sectionType: section.sectionType,
                uniqueNames,
            };
        });


        return NextResponse.json({ sections: uniqueNamesBySection });
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
