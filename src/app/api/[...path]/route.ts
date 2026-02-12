import { type NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { ACCESS_TOKEN_KEY, TEMP_ACCESS_TOKEN_KEY } from '@/shared/constants/api';

type RouteParams = {
  path: string[];
};

async function proxyToBackend(request: NextRequest, params: RouteParams) {
  try {
    const path = `/api/${(params.path ?? []).join('/')}`;
    const targetUrl = new URL(path + request.nextUrl.search, process.env.BACKEND_BASE_URL);

    const proxyRequest = new Request(targetUrl, request);

    const cookieAccessToken = request.cookies.get(ACCESS_TOKEN_KEY)?.value;
    const cookieTempAccessToken = request.cookies.get(TEMP_ACCESS_TOKEN_KEY)?.value;
    const accessToken = cookieAccessToken ?? cookieTempAccessToken;

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
