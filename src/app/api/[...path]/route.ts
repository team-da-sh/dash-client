import { NextResponse, type NextRequest } from 'next/server';
import { ACCESS_TOKEN_KEY } from '@/shared/constants/api';

type Params = {
  path: string[];
};

async function proxyToBackend(request: NextRequest, { path }: Params) {
  const joinedPath = `/${(path ?? []).join('/')}`;
  const search = request.nextUrl.search;
  const targetUrl = new URL(joinedPath + search, process.env.NEXT_PUBLIC_DEV_BASE_URL);

  // NextRequest는 읽기 전용이라 새 헤더 객체 생성하여 사용 (쿠키 정보 제외, Authorization 헤더 추가)
  const headers = new Headers();
  const headerWhitelist = ['content-type', 'accept', 'accept-language', 'user-agent'];

  request.headers.forEach((value, key) => {
    const lowerKey = key.toLowerCase();

    // 백엔드에서 필요한 헤더 + 커스텀 헤더값 전달
    if (headerWhitelist.includes(lowerKey) || lowerKey.startsWith('x-')) {
      headers.set(key, value);
    }
  });

  const accessToken = request.cookies.get(ACCESS_TOKEN_KEY)?.value;
  if (accessToken) {
    headers.set('Authorization', `Bearer ${accessToken}`);
  }

  const init: RequestInit = {
    method: request.method,
    headers,
    cache: 'no-store',
  };

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    init.body = request.body;
  }

  try {
    const response = await fetch(targetUrl, init);

    return response;
  } catch {
    return NextResponse.json({ message: 'Failed to connect to backend' }, { status: 502 });
  }
}

// route handler 메서드별로 proxyToBackend 함수 호출 (Next 표준 문법)
export async function GET(request: NextRequest, context: { params: Params }) {
  return proxyToBackend(request, context.params);
}

export async function POST(request: NextRequest, context: { params: Params }) {
  return proxyToBackend(request, context.params);
}

export async function PUT(request: NextRequest, context: { params: Params }) {
  return proxyToBackend(request, context.params);
}

export async function PATCH(request: NextRequest, context: { params: Params }) {
  return proxyToBackend(request, context.params);
}

export async function DELETE(request: NextRequest, context: { params: Params }) {
  return proxyToBackend(request, context.params);
}
