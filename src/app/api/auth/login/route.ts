import { NextResponse, type NextRequest } from 'next/server';
import { authFetch } from '@/app/api/auth/_authFetch';
import { COOKIE_OPTIONS } from '@/app/api/auth/_cookieOptions';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, TEMP_ACCESS_TOKEN_KEY } from '@/shared/constants/api';
import { API_URL } from '@/shared/constants/apiURL';

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
      return NextResponse.json(data ?? { message: 'Login failed' }, {
        status: response.status,
      });
    }

    // 로그인 성공 시에는 온보딩 여부와 무관하게 토큰을 httpOnly 쿠키로만 관리
    const res = NextResponse.json(
      { isOnboarded: data.isOnboarded, isDeleted: data.isDeleted },
      { status: response.status }
    );

    // refreshToken은 항상 httpOnly 쿠키에 저장
    if (data.refreshToken) {
      res.cookies.set(REFRESH_TOKEN_KEY, data.refreshToken, COOKIE_OPTIONS);
    }

    // accessToken은 온보딩 완료/재가입 유저는 ACCESS_TOKEN 쿠키에, 그 외는 TEMP_ACCESS_TOKEN 쿠키에 저장
    if (data.accessToken) {
      if (data.isOnboarded && !data.isDeleted) {
        res.cookies.set(ACCESS_TOKEN_KEY, data.accessToken, COOKIE_OPTIONS);
      } else {
        res.cookies.set(TEMP_ACCESS_TOKEN_KEY, data.accessToken, COOKIE_OPTIONS);
      }
    }

    return res;
  } catch {
    return NextResponse.json({ message: 'server error' }, { status: 500 });
  }
}
