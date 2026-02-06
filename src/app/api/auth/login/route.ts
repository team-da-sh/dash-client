import { NextResponse, type NextRequest } from 'next/server';
import { authFetch } from '@/app/api/auth/_authFetch';
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

    const response = await authFetch(API_URL.AUTH_LOGIN, {
      method: 'POST',
      body: JSON.stringify(body),
    });

    const data = await response.json();

    // 로그인 실패 시 에러 반환
    if (!response.ok) {
      return NextResponse.json(data ?? { message: 'Login failed' }, { status: response.status });
    }

    // 온보딩 완료된 사용자만 쿠키 설정; 미완료/재가입 시 토큰은 body로만 전달
    if (data.isOnboarded && !data.isDeleted) {
      const res = NextResponse.json(
        { isOnboarded: data.isOnboarded, isDeleted: data.isDeleted },
        { status: response.status }
      );
      if (data.accessToken) {
        res.cookies.set(ACCESS_TOKEN_KEY, data.accessToken, COOKIE_OPTIONS);
      }
      if (data.refreshToken) {
        res.cookies.set(REFRESH_TOKEN_KEY, data.refreshToken, COOKIE_OPTIONS);
      }
      return res;
    }

    // isOnboarded false 또는 isDeleted: 쿠키 설정하지 않음, 토큰을 body로 반환
    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json({ message: 'server error' }, { status: 500 });
  }
}
