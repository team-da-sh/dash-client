import type { LoginResponseTypes } from '@/app/auth/types/api';
import { kyInstance } from '@/shared/apis/kyInstance';

// Next BFF Route Handler (/api/auth/*) 기반 인증 API
export const kakaoLogin = async (redirectUrl: string, code: string) => {
  const response = await kyInstance.post('auth/login', {
    json: { provider: 'KAKAO', redirectUrl, code },
  });

  return { data: await response.json<LoginResponseTypes>() };
};

// 로그아웃
export const postLogout = async () => {
  await kyInstance.post('auth/logout');
};

export const postReissue = async () => {
  const data = await kyInstance.post('auth/reissue').json();
  return data;
};

// 온보딩 완료 시 TEMP 토큰을 정식 ACCESS 토큰으로 승격
export const postPromoteTempToken = async () => {
  const data = await kyInstance.post('auth/promote-onboarding-token').json();
  return data;
};
