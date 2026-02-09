import { NextResponse, type NextRequest } from 'next/server';
import { COOKIE_OPTIONS } from '@/app/api/auth/_cookieOptions';
import { ACCESS_TOKEN_KEY, TEMP_ACCESS_TOKEN_KEY } from '@/shared/constants/api';

export async function POST(request: NextRequest) {
  try {
    const tempAccessToken = request.cookies.get(TEMP_ACCESS_TOKEN_KEY)?.value;

    // TEMP 토큰이 없으면 승격할 대상이 없으므로 그대로 통과시키되, promoted=false로 응답
    if (!tempAccessToken) {
      return NextResponse.json({ ok: true, promoted: false });
    }

    const res = NextResponse.json({ ok: true, promoted: true });

    // TEMP 토큰을 정식 ACCESS 토큰으로 승격
    res.cookies.set(ACCESS_TOKEN_KEY, tempAccessToken, COOKIE_OPTIONS);
    res.cookies.delete({ name: TEMP_ACCESS_TOKEN_KEY, path: '/' });

    return res;
  } catch {
    return NextResponse.json({ message: 'Failed to promote onboarding token' }, { status: 500 });
  }
}
