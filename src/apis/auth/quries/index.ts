import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { instance } from '@/apis/api';
import { kakaoLogin, loginTypes } from '@/apis/auth/axios';
import { saveTokensToLocalStorage } from '@/utils/saveTokensToLocalStorage';
import { ROUTES_CONFIG } from '@/routes/routesConfig';

export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ redirectUrl, code }: loginTypes) => kakaoLogin(redirectUrl, code),

    onSuccess: ({ data: { accessToken, refreshToken, isOnboarded } }) => {
      instance.defaults.headers.Authorization = `Bearer ${accessToken}`;
      if (!isOnboarded) {
        navigate(ROUTES_CONFIG.onboarding.path, { state: { accessToken, refreshToken } });
        return;
      }

      navigate(ROUTES_CONFIG.home.path);
      saveTokensToLocalStorage(accessToken, refreshToken);
    },

    onError: (error: AxiosError) => {
      if (!error.response) return;
    },
  });
};
