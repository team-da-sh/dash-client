import { instance } from '@/shared/apis/instance';

// Next BFF Route Handler (/api/auth/*) 기반 인증 API
export const kakaoLogin = async (redirectUrl: string, code: string) => {
  const response = await instance.post('/auth/login', { provider: 'KAKAO', redirectUrl, code });

  return response;
};

// 로그아웃
export const postLogout = async () => {
  await instance.post('/auth/logout');
};

export const postReissue = async () => {
  const { data } = await instance.post('/auth/reissue');

  return data;
};

// 온보딩 완료 시 TEMP 토큰을 정식 ACCESS 토큰으로 승격
export const postPromoteTempToken = async () => {
  const { data } = await instance.post('/auth/promote-onboarding-token');

  return data;
};
