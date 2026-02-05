import { NextResponse, type NextRequest } from 'next/server';
import { ACCESS_TOKEN_KEY, WITHDRAW_COMPLETED_KEY, WITHDRAW_VALIDATED_KEY } from '@/shared/constants/api';
import { API_URL } from '@/shared/constants/apiURL';

const COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: 'lax' as const,
  secure: process.env.NODE_ENV === 'production',
  path: '/',
};

export async function POST(request: NextRequest) {
  try {
    const accessToken = request.cookies.get(ACCESS_TOKEN_KEY)?.value;

    if (!accessToken) {
      return NextResponse.json({ message: 'Missing access token' }, { status: 401 });
    }

    const response = await fetch(new URL(API_URL.MEMBERS_WITHDRAW, process.env.NEXT_PUBLIC_DEV_BASE_URL), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      cache: 'no-store',
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      return NextResponse.json(data ?? { message: 'Withdraw failed' }, { status: response.status });
    }

    const res = NextResponse.json(data, { status: response.status });

    // 탈퇴 요청이 정상적으로 완료된 경우, 완료 상태 쿠키를 설정하고 검증 상태는 초기화
    res.cookies.set(WITHDRAW_COMPLETED_KEY, 'true', COOKIE_OPTIONS);
    res.cookies.delete({ name: WITHDRAW_VALIDATED_KEY, path: '/' });

    return res;
  } catch {
    return NextResponse.json({ message: 'Withdraw failed' }, { status: 500 });
  }
}
