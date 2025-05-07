import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { postOnboard } from '@/pages/onboarding/apis/axios';
import type { tokenTypes } from '@/pages/onboarding/types/api';
import type { onboardInfoTypes } from '@/pages/onboarding/types/onboardInfoTypes';

export const usePostOnboard = () => {
  return useMutation({
    mutationFn: ({ name, phoneNumber, nickname, profileImageUrl, accessToken }: onboardInfoTypes & tokenTypes) =>
      postOnboard({
        name,
        phoneNumber,
        nickname,
        profileImageUrl,
        accessToken,
      }),

    onError: (error: AxiosError) => {
      if (!error.response) return;
      console.log(error);
    },
  });
};
