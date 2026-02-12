import { NextResponse, type NextRequest } from 'next/server';
import { authFetch } from '@/app/api/auth/_authFetch';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/shared/constants/api';
import { API_URL } from '@/shared/constants/apiURL';

export async function POST(request: NextRequest) {
  try {
    const accessToken = request.cookies.get(ACCESS_TOKEN_KEY)?.value;

    const response = await authFetch(API_URL.AUTH_LOGOUT, {
      method: 'POST',
      headers: {
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      },
    });

    const res = response.ok
      ? NextResponse.json({ ok: true })
      : NextResponse.json({ message: 'Logout failed' }, { status: response.status });

    // 백엔드 응답과 무관하게 쿠키는 항상 삭제 (토큰 만료 상태에서도 로그아웃 가능하도록)
    res.cookies.delete({ name: ACCESS_TOKEN_KEY, path: '/' });
    res.cookies.delete({ name: REFRESH_TOKEN_KEY, path: '/' });
    return res;
  } catch {
    return NextResponse.json({ message: 'Logout failed' }, { status: 500 });
  }
}
