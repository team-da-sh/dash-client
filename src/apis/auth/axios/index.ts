import { instance } from '@/apis/api';

export interface loginTypes {
  redirectUrl: string;
  code: string;
}

export const kakaoLogin = async (redirectUrl: string, code: string) => {
  const response = await instance.post(`/api/v1/auth/login`, { provider: 'KAKAO', redirectUrl, code });

  return response;
};
