import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { kakaoLogin, postLogout, postReissue } from '@/app/auth/apis/ky';
import type { loginTypes } from '@/app/auth/types/api';
import { authKeys } from '@/shared/constants/queryKey';
import type { ApiError } from '@/shared/types/ApiError';
import { clearStorage } from '@/shared/utils/handleToken';

export const useLoginMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({ redirectUrl, code }: loginTypes) => kakaoLogin(redirectUrl, code),

    onSuccess: ({ data: { isOnboarded, isDeleted } }) => {
      console.log('성공은 하니??');
      if (!isOnboarded || isDeleted) {
        console.log('여기야?');
        clearStorage();
        router.push(isDeleted ? '/onboarding?isDeleted=true' : '/onboarding');
        return;
      }

      router.push('/');
    },

    onError: (error: ApiError) => {
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
    onError: (error: ApiError) => {
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
