import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { onboardInfoTypes } from '@/pages/onboarding/types';
import { patchOnboard, tokenTypes } from '@/apis/onboarding/axios';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/constants/api';

export const useOnboardMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({
      name,
      phoneNumber,
      level,
      nickname,
      profileImageUrl,
      genres,
      accessToken,
      refreshToken,
    }: onboardInfoTypes & tokenTypes) =>
      patchOnboard({ name, phoneNumber, level, nickname, profileImageUrl, genres, accessToken, refreshToken }),

    onSuccess: ({ response, accessToken, refreshToken }) => {
      console.log('온보딩 성공');

      if (response.data.code === 200) {
        localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
        navigate(ROUTES_CONFIG.home.path);
        return;
      }
    },

    onError: (error: AxiosError) => {
      if (!error.response) return;
      console.log(error);
    },
  });
};
