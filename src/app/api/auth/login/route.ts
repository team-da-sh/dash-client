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

    const isOnboarded = data.isOnboarded === true;
    const isDeleted = data.isDeleted === true;

    // 온보딩 완료된 사용자만 쿠키 설정; 미완료/재가입 시 토큰은 body로만 전달
    if (isOnboarded && !isDeleted) {
      const res = NextResponse.json({ isOnboarded: true }, { status: response.status });
      if (data.accessToken) {
        res.cookies.set(ACCESS_TOKEN_KEY, data.accessToken, COOKIE_OPTIONS);
      }
      if (data.refreshToken) {
        res.cookies.set(REFRESH_TOKEN_KEY, data.refreshToken, COOKIE_OPTIONS);
      }
      return res;
    }

    // isOnboarded false 또는 isDeleted: 쿠키 설정하지 않음, 토큰을 body로 반환
    return NextResponse.json(
      {
        isOnboarded: data.isOnboarded,
        isDeleted: data.isDeleted,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      },
      { status: response.status }
    );
  } catch {
    return NextResponse.json({ message: 'Login failed' }, { status: 500 });
  }
}
