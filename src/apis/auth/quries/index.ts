import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { instance } from '@/apis/api';
import { kakaoLogin, loginTypes } from '@/apis/auth/axios';
import { ROUTES_CONFIG } from '@/routes/routesConfig';

export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ redirectUrl, code }: loginTypes) => kakaoLogin(redirectUrl, code),

    onSuccess: ({ data: { accessToken } }) => {
      localStorage.setItem('ACCESS_TOKEN', accessToken);

      console.log('성공');
      instance.defaults.headers.Authorization = `Bearer ${accessToken}`;

      navigate(ROUTES_CONFIG.onboarding.path);
    },

    onError: (error: AxiosError) => {
      if (!error.response) return;

      console.log(error);
    },
  });
};
