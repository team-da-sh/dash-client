import { NextResponse, type NextRequest } from 'next/server';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/shared/constants/api';
import { API_URL } from '@/shared/constants/apiURL';

export async function POST(request: NextRequest) {
  try {
    const accessToken = request.cookies.get(ACCESS_TOKEN_KEY)?.value;

    const response = await fetch(new URL(API_URL.AUTH_LOGOUT, process.env.NEXT_PUBLIC_DEV_BASE_URL), {
      method: 'POST',
      headers: {
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      return NextResponse.json(data ?? { message: 'Logout failed' }, { status: response.status });
    }

    const res = NextResponse.json({ ok: true });
    res.cookies.delete({ name: ACCESS_TOKEN_KEY, path: '/' });
    res.cookies.delete({ name: REFRESH_TOKEN_KEY, path: '/' });
    return res;
  } catch {
    return NextResponse.json({ message: 'Logout failed' }, { status: 500 });
  }
}
