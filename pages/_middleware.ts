import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    // it will be used for custom domain behaviour
    // console.log('host', req.headers.get('host'))
    return NextResponse.next();
}
