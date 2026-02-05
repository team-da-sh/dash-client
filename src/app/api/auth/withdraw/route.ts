import { NextResponse, type NextRequest } from 'next/server';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  WITHDRAW_COMPLETED_KEY,
  WITHDRAW_VALIDATED_KEY,
} from '@/shared/constants/api';
import { API_URL } from '@/shared/constants/apiURL';

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

    // 탈퇴 성공 시 인증·탈퇴 플로우 관련 쿠키 전부 삭제
    const cookiePath = { path: '/' };
    res.cookies.delete({ name: ACCESS_TOKEN_KEY, ...cookiePath });
    res.cookies.delete({ name: REFRESH_TOKEN_KEY, ...cookiePath });
    res.cookies.delete({ name: WITHDRAW_VALIDATED_KEY, ...cookiePath });
    res.cookies.delete({ name: WITHDRAW_COMPLETED_KEY, ...cookiePath });

    return res;
  } catch {
    return NextResponse.json({ message: 'Withdraw failed' }, { status: 500 });
  }
}
