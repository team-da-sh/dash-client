import { NextResponse, type NextRequest } from 'next/server';
import type { LessonDetailResponseTypes } from '@/app/class/[id]/types/api';
import {
  ACCESS_TOKEN_KEY,
  TEMP_ACCESS_TOKEN_KEY,
  HTTP_STATUS_CODE,
  WITHDRAW_COMPLETED_KEY,
  WITHDRAW_VALIDATED_KEY,
} from '@/shared/constants/api';
import { API_URL } from '@/shared/constants/apiURL';

const AUTH_REQUIRED_PATHS: RegExp[] = [/^\/my(\/|$)/, /^\/class(\/|$)/, /^\/dancer(\/|$)/];
const GUEST_ONLY_PATHS: RegExp[] = [/^\/login(\/|$)/, /^\/auth(\/|$)/];
const ONBOARDING_PATHS: RegExp[] = [/^\/onboarding(\/|$)/];
const RESERVATION_PATHS: RegExp[] = [/^\/class\/[^/]+\/register(\/|$)/];
const WITHDRAW_PATHS: RegExp[] = [/^\/my\/withdraw(\/|$)/];

const isMatch = (pathname: string, patterns: RegExp[]) => patterns.some((regex) => regex.test(pathname));

const getAccessTokenFromCookies = (request: NextRequest) =>
  request.cookies.get(ACCESS_TOKEN_KEY)?.value ?? request.cookies.get(TEMP_ACCESS_TOKEN_KEY)?.value;

export const hasAccessToken = (request: NextRequest) => Boolean(getAccessTokenFromCookies(request));

export const isAuthRequiredPath = (pathname: string) => isMatch(pathname, AUTH_REQUIRED_PATHS);
export const isGuestOnlyPath = (pathname: string) => isMatch(pathname, GUEST_ONLY_PATHS);
export const isOnboardingPath = (pathname: string) => isMatch(pathname, ONBOARDING_PATHS);
export const isReservationPath = (pathname: string) => isMatch(pathname, RESERVATION_PATHS);
export const isWithdrawPath = (pathname: string) => isMatch(pathname, WITHDRAW_PATHS);

export const getStepParam = (request: NextRequest) => request.nextUrl.searchParams.get('step');

// 미들웨어 가드 우선순위
// 1. Auth / Guest 가드 (로그인 필요, 비로그인 전용 페이지)
// 2. 온보딩 가드
// 3. 예약 가드
export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const cookieAccessToken = request.cookies.get(ACCESS_TOKEN_KEY)?.value;
  const cookieTempAccessToken = request.cookies.get(TEMP_ACCESS_TOKEN_KEY)?.value;
  const accessToken = hasAccessToken(request);

  const isProtectedRoute = isAuthRequiredPath(pathname);
  const isAuthPage = isGuestOnlyPath(pathname);
  const isWithdrawRoute = isWithdrawPath(pathname);

  // 1. AuthGuard: 보호 라우트 접근 제어
  if (isProtectedRoute) {
    const step = getStepParam(request);

    // 1-1. 온보딩 진행 중(TEMP 토큰만 있는) 사용자는 보호 라우트 접근 시 온보딩 페이지로 리다이렉트
    if (!cookieAccessToken && cookieTempAccessToken) {
      const onboardingUrl = new URL('/onboarding', request.url);
      return NextResponse.redirect(onboardingUrl);
    }

    // 1-2. 비로그인 사용자가 보호 라우트 접근 시 로그인 페이지로 리다이렉트
    // 단, 탈퇴 완료 페이지(step=3)는 예외 — 탈퇴 API에서 쿠키 삭제 후 완료 화면을 보여주기 위함
    if (!accessToken) {
      if (pathname === '/my/withdraw' && step === '3') {
        return NextResponse.next();
      }
      const loginUrl = new URL('/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // 1-2. GuestGuard: 로그인 사용자가 로그인/인증 페이지로 접근 시 홈으로 리다이렉트
  if (accessToken && isAuthPage) {
    const homeUrl = new URL('/', request.url);
    return NextResponse.redirect(homeUrl);
  }

  // 2. 온보딩 가드: 쿠키 기반으로 온보딩 접근 제어
  if (isOnboardingPath(pathname)) {
    // 2-1. 비로그인 사용자: 온보딩 페이지 접근 시 로그인 페이지로 리다이렉트
    if (!cookieAccessToken && !cookieTempAccessToken) {
      const loginUrl = new URL('/login', request.url);
      const redirectTarget = pathname + search;

      if (redirectTarget !== '/') {
        loginUrl.searchParams.set('redirectUrl', redirectTarget);
      }

      return NextResponse.redirect(loginUrl);
    }

    // 2-2. TEMP 토큰 사용자: 온보딩/재가입 진행 중이므로 온보딩 페이지 접근 허용
    if (!cookieAccessToken && cookieTempAccessToken) {
      return NextResponse.next();
    }

    // 2-3. ACCESS 토큰 사용자: 온보딩 완료 유저
    // 온보딩 성공 화면(step=2)만 예외적으로 허용하고, 그 외에는 홈으로 리다이렉트
    if (cookieAccessToken) {
      const homeUrl = new URL('/', request.url);
      return NextResponse.redirect(homeUrl);
    }
  }

  // 3. 예약 가드: 예약 페이지(step=1) 진입 전 수업 상태 검증
  if (isReservationPath(pathname)) {
    const step = getStepParam(request);
    const lessonIdMatch = pathname.match(/^\/class\/([^/]+)\/register/);
    const lessonIdRaw = lessonIdMatch?.[1];
    const lessonId = lessonIdRaw ? Number(lessonIdRaw) : NaN;

    // id가 유효한 숫자가 아니면 홈으로 리다이렉트
    if (!Number.isFinite(lessonId)) {
      const homeUrl = new URL('/', request.url);
      return NextResponse.redirect(homeUrl);
    }

    // step=1일 때만 서버에서 예약 가능 상태 검증
    if (step === '1') {
      try {
        const accessTokenValue = getAccessTokenFromCookies(request);

        const response = await fetch(
          new URL(`${API_URL.LESSON_DETAIL}/${lessonId}`, process.env.NEXT_PUBLIC_DEV_BASE_URL),
          {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              ...(accessTokenValue ? { Authorization: `Bearer ${accessTokenValue}` } : {}),
            },
            cache: 'no-store',
          }
        );

        if (!response.ok) {
          // 인증 실패 시 로그인 페이지로 이동
          if (response.status === HTTP_STATUS_CODE.UNAUTHORIZED || response.status === HTTP_STATUS_CODE.FORBIDDEN) {
            const loginUrl = new URL('/login', request.url);
            const redirectTarget = pathname + search;
            if (redirectTarget !== '/') {
              loginUrl.searchParams.set('redirectUrl', redirectTarget);
            }
            return NextResponse.redirect(loginUrl);
          }

          // 그 외 오류 시 수업 상세 페이지로 이동
          const detailUrl = new URL(`/class/${lessonId}`, request.url);
          return NextResponse.redirect(detailUrl);
        }

        const data = (await response.json().catch(() => null)) as Pick<
          LessonDetailResponseTypes,
          'status' | 'bookStatus' | 'isMyLesson' | 'teacherNickname'
        > | null;

        const status = data?.status;
        const bookStatus = data?.bookStatus;
        const isMyLesson = data?.isMyLesson;
        const teacherNickname = data?.teacherNickname;

        const isReservable =
          status === 'OPEN' && bookStatus === false && isMyLesson === false && Boolean(teacherNickname);

        // 예약이 불가능한 상태면 수업 상세 페이지로 이동
        if (!isReservable) {
          const detailUrl = new URL(`/class/${lessonId}`, request.url);
          return NextResponse.redirect(detailUrl);
        }
      } catch {
        // 예기치 못한 오류 시에도 수업 상세 페이지로 이동
        const detailUrl = new URL(`/class/${lessonId}`, request.url);
        return NextResponse.redirect(detailUrl);
      }
    }
  }

  // 4. 탈퇴 가드: 탈퇴 플로우 단계별 접근을 서버에서 관리 가능한 쿠키 기반으로 제어
  if (isWithdrawRoute) {
    const step = getStepParam(request) ?? '1';
    const withdrawValidated = request.cookies.get(WITHDRAW_VALIDATED_KEY)?.value === 'true';
    const withdrawCompleted = request.cookies.get(WITHDRAW_COMPLETED_KEY)?.value === 'true';

    // 탈퇴 완료 직후: API에서 쿠키를 삭제한 상태로 step=3 요청이 오면 완료 페이지 허용
    if (!accessToken && step === '3') {
      return NextResponse.next();
    }

    // 이미 탈퇴가 완료된 사용자는 언제나 완료 페이지(step=3)로만 접근 허용
    if (withdrawCompleted) {
      if (step !== '3') {
        const completedUrl = new URL('/my/withdraw', request.url);
        completedUrl.searchParams.set('step', '3');
        return NextResponse.redirect(completedUrl);
      }

      return NextResponse.next();
    }

    // 탈퇴 전 유효성 검증(예약 여부 등)이 서버에서 통과되지 않은 경우, 탈퇴 플로우 전체를 차단
    if (!withdrawValidated) {
      const myPageUrl = new URL('/my', request.url);
      return NextResponse.redirect(myPageUrl);
    }

    // 검증은 완료되었지만 실제 탈퇴가 완료되지 않은 상태에서 완료(step=3)로 바로 접근하면
    // 직전 단계(step=2: 안내/동의 페이지)로 돌려보낸다.
    if (step === '3') {
      const secondStepUrl = new URL('/my/withdraw', request.url);
      secondStepUrl.searchParams.set('step', '2');
      return NextResponse.redirect(secondStepUrl);
    }
  }

  return NextResponse.next();
}

// 정적 리소스 및 API는 미들웨어 대상에서 제외
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
