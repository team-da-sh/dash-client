import { NextResponse, type NextRequest } from 'next/server';
import { authFetch } from '@/app/api/auth/_authFetch';
import { COOKIE_OPTIONS } from '@/app/api/auth/_cookieOptions';
import { ACCESS_TOKEN_KEY, WITHDRAW_COMPLETED_KEY, WITHDRAW_VALIDATED_KEY } from '@/shared/constants/api';
import { API_URL } from '@/shared/constants/apiURL';

export async function POST(request: NextRequest) {
  try {
    const accessToken = request.cookies.get(ACCESS_TOKEN_KEY)?.value;

    if (!accessToken) {
      return NextResponse.json({ message: 'Missing access token' }, { status: 401 });
    }

    const response = await authFetch(API_URL.MEMBERS_VALIDATE_WITHDRAW, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      return NextResponse.json(data ?? { message: 'Validate withdraw failed' }, { status: response.status });
    }

    const res = NextResponse.json(data, { status: response.status });

    // 탈퇴 가능 여부 검증에 성공한 경우, 서버에서 확인된 상태임을 나타내는 쿠키를 설정
    res.cookies.set(WITHDRAW_VALIDATED_KEY, 'true', COOKIE_OPTIONS);
    // 이전 세션에서 남아있을 수 있는 완료 상태는 초기화
    res.cookies.delete({ name: WITHDRAW_COMPLETED_KEY, path: '/' });

    return res;
  } catch {
    return NextResponse.json({ message: 'Validate withdraw failed' }, { status: 500 });
  }
}
