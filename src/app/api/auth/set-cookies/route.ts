import { NextResponse, type NextRequest } from 'next/server';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/shared/constants/api';

const COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: 'lax' as const,
  secure: process.env.NODE_ENV === 'production',
  path: '/',
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json().catch(() => null)) as {
      accessToken?: string;
      refreshToken?: string;
    } | null;

    if (!body?.accessToken) {
      return NextResponse.json({ message: 'Missing accessToken' }, { status: 400 });
    }

    const res = NextResponse.json({ ok: true });
    res.cookies.set(ACCESS_TOKEN_KEY, body.accessToken, COOKIE_OPTIONS);
    if (body.refreshToken) {
      res.cookies.set(REFRESH_TOKEN_KEY, body.refreshToken, COOKIE_OPTIONS);
    }

    return res;
  } catch {
    return NextResponse.json({ message: 'Set cookies failed' }, { status: 500 });
  }
}
