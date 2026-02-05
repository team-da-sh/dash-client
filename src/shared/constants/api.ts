export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN' as const;
export const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN' as const;

// 회원 탈퇴 플로우 서버 가드용 쿠키 키
export const WITHDRAW_VALIDATED_KEY = 'WITHDRAW_VALIDATED' as const;
export const WITHDRAW_COMPLETED_KEY = 'WITHDRAW_COMPLETED' as const;

/** Next.js: onboarding 페이지로 리다이렉트 시 토큰 전달용 (sessionStorage 키) */
export const ONBOARDING_TOKENS_KEY = 'onboarding-tokens' as const;

/** Next.js: 클래스 취소 확인 페이지로 리다이렉트 시 입금/계좌 정보 전달용 */
export const MYPAGE_CANCEL_CONFIRM_STATE_KEY = 'mypage-cancel-confirm-state' as const;

export const HTTP_STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
} as const;
