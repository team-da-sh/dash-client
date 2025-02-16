import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const kakaoLogin = async (redirectUrl: string, code: string) => {
  const response = await instance.post(`/api/v1/auth/login`, { provider: 'KAKAO', redirectUrl, code });

  return response;
};

// 로그아웃
export const postLogout = async () => {
  await instance.post(API_URL.AUTH_LOGOUT);
};
