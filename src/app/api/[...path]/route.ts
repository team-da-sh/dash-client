import { NextResponse, type NextRequest } from 'next/server';
import { ACCESS_TOKEN_KEY } from '@/shared/constants/api';

type RouteParams = {
  path: string[];
};

async function proxyToBackend(request: NextRequest, params: RouteParams) {
  const joinedPath = `/${(params.path ?? []).join('/')}`;
  const search = request.nextUrl.search;
  const targetUrl = new URL(joinedPath + search, process.env.NEXT_PUBLIC_DEV_BASE_URL);

  const proxyRequest = new Request(targetUrl, request);

  // 온보딩 과정에서는 쿠키에 토큰이 없으므로 헤더에서 토큰을 가져옴
  const cookieToken = request.cookies.get(ACCESS_TOKEN_KEY)?.value;
  const headerToken = request.headers.get('Authorization')?.replace(/^Bearer\s+/i, '');
  const accessToken = cookieToken ?? headerToken;
  proxyRequest.headers.delete('cookie');
  if (accessToken) {
    proxyRequest.headers.set('Authorization', `Bearer ${accessToken}`);
  }

  const response = await fetch(proxyRequest);

  if (!response.ok) {
    const data = await response.json().catch(() => null);
    return NextResponse.json(data, { status: response.status });
  }

  return response;
}

// route handler 메서드별로 proxyToBackend 함수 호출 (Next 15 표준 문법)
export async function GET(request: NextRequest, { params }: { params: Promise<RouteParams> }) {
  return proxyToBackend(request, await params);
}

export async function POST(request: NextRequest, { params }: { params: Promise<RouteParams> }) {
  return proxyToBackend(request, await params);
}

export async function PUT(request: NextRequest, { params }: { params: Promise<RouteParams> }) {
  return proxyToBackend(request, await params);
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<RouteParams> }) {
  return proxyToBackend(request, await params);
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<RouteParams> }) {
  return proxyToBackend(request, await params);
}
