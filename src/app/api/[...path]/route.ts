import { type NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { ACCESS_TOKEN_KEY } from '@/shared/constants/api';

type RouteParams = {
  path: string[];
};

async function proxyToBackend(request: NextRequest, params: RouteParams) {
  try {
    const path = `/${(params.path ?? []).join('/')}`;
    const targetUrl = new URL(path + request.nextUrl.search, process.env.BACKEND_BASE_URL);

    const proxyRequest = new Request(targetUrl, request);

    // 온보딩 과정에서는 쿠키에 토큰이 없으므로 헤더에서 토큰을 가져옴
    const cookieToken = request.cookies.get(ACCESS_TOKEN_KEY)?.value;
    const headerToken = request.headers.get('Authorization')?.replace(/^Bearer\s+/i, '');
    const accessToken = cookieToken ?? headerToken;

    if (accessToken) {
      proxyRequest.headers.set('Authorization', `Bearer ${accessToken}`);
    }

    return await fetch(proxyRequest);
  } catch {
    return NextResponse.json({ message: 'Proxy failed' }, { status: 500 });
  }
}

const proxyHandler = async (request: NextRequest, { params }: { params: Promise<RouteParams> }) =>
  proxyToBackend(request, await params);

export const GET = proxyHandler;
export const POST = proxyHandler;
export const PUT = proxyHandler;
export const PATCH = proxyHandler;
export const DELETE = proxyHandler;
