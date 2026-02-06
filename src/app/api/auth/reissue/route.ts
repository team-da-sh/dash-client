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
    const refreshToken = request.cookies.get(REFRESH_TOKEN_KEY)?.value;
    if (!refreshToken) {
      return NextResponse.json({ message: 'Missing refresh token' }, { status: 401 });
    }

    const response = await authFetch(API_URL.AUTH_REISSUE, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      return NextResponse.json(data ?? { message: 'Reissue failed' }, { status: response.status });
    }

    const res = NextResponse.json({ ok: true }, { status: response.status });
    if (data.accessToken) {
      res.cookies.set(ACCESS_TOKEN_KEY, data.accessToken, COOKIE_OPTIONS);
    }
    if (data.refreshToken) {
      res.cookies.set(REFRESH_TOKEN_KEY, data.refreshToken, COOKIE_OPTIONS);
    }

    return res;
  } catch {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
