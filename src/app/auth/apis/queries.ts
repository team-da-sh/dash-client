import { useMutation, useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { kakaoLogin, postLogout, postReissue } from '@/app/auth/apis/axios';
import type { loginTypes } from '@/app/auth/types/api';
import { instance } from '@/shared/apis/instance';
import { ONBOARDING_TOKENS_KEY } from '@/shared/constants/api';
import { authKeys } from '@/shared/constants/queryKey';
import { clearStorage, setStorage } from '@/shared/utils/handleToken';

export const useLoginMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({ redirectUrl, code }: loginTypes) => kakaoLogin(redirectUrl, code),

    onSuccess: ({ data: { accessToken, refreshToken, isOnboarded, isDeleted } }) => {
      instance.defaults.headers.Authorization = `Bearer ${accessToken}`;
      if (!isOnboarded || isDeleted) {
        clearStorage();
        if (typeof window !== 'undefined') {
          sessionStorage.setItem(ONBOARDING_TOKENS_KEY, JSON.stringify({ accessToken, refreshToken, isDeleted }));
        }
        router.push(ROUTES_CONFIG.onboarding.path);
        return;
      }

      router.push(ROUTES_CONFIG.home.path);
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

export const usePostReissue = () => {
  return useQuery({
    queryFn: postReissue,
    queryKey: authKeys.reissue.queryKey,
  });
};
