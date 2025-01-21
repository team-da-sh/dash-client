import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { instance } from '@/apis/api';
import { kakaoLogin, loginTypes } from '@/apis/auth/axios';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/constants/api';

export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ redirectUrl, code }: loginTypes) => kakaoLogin(redirectUrl, code),

    onSuccess: ({ data: { accessToken, refreshToken, isOnboarded } }) => {
      console.log('로그인 성공');
      instance.defaults.headers.Authorization = `Bearer ${accessToken}`;

      if (!isOnboarded) {
        navigate(ROUTES_CONFIG.onboarding.path, { state: { accessToken, refreshToken } });
        return;
      }

      navigate(ROUTES_CONFIG.home.path);
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
      localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    },

    onError: (error: AxiosError) => {
      if (!error.response) return;
    },
  });
};
