import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Redirigir /unidad sin slug a /categoria
  if (pathname === '/unidad') {
    return NextResponse.redirect(new URL('/categoria', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/unidad'
}