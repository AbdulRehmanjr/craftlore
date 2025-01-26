import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { TRPCClientError } from '@trpc/client';
import { type NextRequest, NextResponse } from 'next/server';
import { db } from '~/server/db'


type RequestProps = {
    materialId: string
    subcategoryId: string
    selectedUniqueNames: string[]
}

export const dynamic = 'force-dynamic'
export async function POST(req: NextRequest) {

    try {
        const authHeader = req.headers.get('authorization')?.split(" ")[1];

        const confirm = await db.apiKey.findFirst({
            where: {
                key: authHeader
            }
        })

        const { materialId, subcategoryId, selectedUniqueNames } = await req.json() as RequestProps

        if (!confirm) {
            return NextResponse.json(
                { message: 'Authorization header missing' },
                { status: 401 }
            );
        }

        const sections = await db.priceSection.findMany({
            where: { subCategoryId: subcategoryId },
            select: {
                priceSectionId: true
            }
        })


        const priceValues = await db.priceValue.findMany({
            where: {
                materialId: materialId,
                priceSectionId: { in: sections.map((section) => section.priceSectionId) },
                name: {
                    in: [...selectedUniqueNames]
                }
            },
            select: {
                value: true
            }
        })

        let totalPrice = 0;

        for (const price of priceValues) {
            totalPrice += price.value ?? 0
        }



        return NextResponse.json({ estimatedCost : totalPrice });
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
