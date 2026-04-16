import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { kakaoLogin, postLogout, postReissue } from '@/app/auth/apis/ky';
import type { loginTypes } from '@/app/auth/types/api';
import { useEventLogger } from '@/lib/analytics';
import { authKeys } from '@/shared/constants/queryKey';
import type { ApiError } from '@/shared/types/ApiError';
import { clearStorage } from '@/shared/utils/handleToken';

export const useLoginMutation = () => {
  const router = useRouter();
  const { logSubmitEvent } = useEventLogger();

  return useMutation({
    mutationFn: ({ redirectUrl, code }: loginTypes) => kakaoLogin(redirectUrl, code),

    onSuccess: ({ data: { isOnboarded, isDeleted, role } }) => {
      logSubmitEvent('login_success', { user_type: role });

      if (!isOnboarded || isDeleted) {
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
  const { reset } = useEventLogger();

  return useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      // TODO-userproperty: 로그아웃 시 Amplitude 유저 식별 초기화
      reset();
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
