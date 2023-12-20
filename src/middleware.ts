import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    console.log({ request });
    await new Promise((resolve)=>{
        setTimeout(()=>{
            return resolve(true);
        },0)
    })
    return NextResponse.redirect(new URL('/login', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/secret', '/dashboard'],
}
