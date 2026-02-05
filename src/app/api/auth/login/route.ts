import { NextResponse, type NextRequest } from 'next/server';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/shared/constants/api';
import { API_URL } from '@/shared/constants/apiURL';

const COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: 'lax' as const,
  secure: process.env.NODE_ENV === 'production',
  path: '/',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(new URL(API_URL.AUTH_LOGIN, process.env.NEXT_PUBLIC_DEV_BASE_URL), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
      cache: 'no-store',
    });

    const data = await response.json();

    // 로그인 실패 시 에러 반환
    if (!response.ok) {
      return NextResponse.json(data ?? { message: 'Login failed' }, { status: response.status });
    }

    // body에서 토큰 지우고, 쿠키 설정하여 반환
    const res = NextResponse.json({ ok: true }, { status: response.status });
    if (data.accessToken) {
      res.cookies.set(ACCESS_TOKEN_KEY, data.accessToken, COOKIE_OPTIONS);
    }
    if (data.refreshToken) {
      res.cookies.set(REFRESH_TOKEN_KEY, data.refreshToken, COOKIE_OPTIONS);
    }

    return res;
  } catch {
    return NextResponse.json({ message: 'Login failed' }, { status: 500 });
  }
}
