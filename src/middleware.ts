import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

    const token = request.headers.get('Authorization')?.split(' ')[1]
    if (!token) {
        return new NextResponse(JSON.stringify({
            success: false,
            message: "UnAuthorized"
        }), {
            status: 401,
            statusText: "Unauthorized",
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    const response = NextResponse.next()
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'PATCH')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    response.headers.set('Access-Control-Allow-Credentials', 'true')

    return response
}

export const config = {
    matcher: '/api/v2/:path*',
}