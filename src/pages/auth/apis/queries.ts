import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { kakaoLogin, postLogout } from '@/pages/auth/apis/axios';
import { loginTypes } from '@/pages/auth/types/api';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { instance } from '@/shared/apis/instance';
import { clearStorage, setStorage } from '@/shared/utils/handleToken';

export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ redirectUrl, code }: loginTypes) => kakaoLogin(redirectUrl, code),

    onSuccess: ({ data: { accessToken, refreshToken, isOnboarded } }) => {
      instance.defaults.headers.Authorization = `Bearer ${accessToken}`;
      if (!isOnboarded) {
        clearStorage();
        navigate(ROUTES_CONFIG.onboarding.path, { state: { accessToken, refreshToken } });
        return;
      }

      navigate(ROUTES_CONFIG.home.path);
      setStorage(accessToken, refreshToken);
    },

    onError: (error: AxiosError) => {
      if (!error.response) return;
    },
  });
};

// 로그아웃
export const usePostLogout = () => {
  return useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      clearStorage();
      window.location.reload();
    },
    onError: (error: AxiosError) => {
      console.error('Logout failed:', error);
    },
  });
};
