import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const kakaoLogin = async (redirectUrl: string, code: string) => {
  const response = await instance.post(API_URL.AUTH_LOGIN, { provider: 'KAKAO', redirectUrl, code });

  return response;
};

// 로그아웃
export const postLogout = async () => {
  await instance.post(API_URL.AUTH_LOGOUT);
};

export const postReissue = async () => {
  const { data } = await instance.post(API_URL.AUTH_REISSUE);

  return data;
};
