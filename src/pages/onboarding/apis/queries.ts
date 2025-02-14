import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { postOnboard, tokenTypes } from '@/pages/onboarding/apis/axios';
import { onboardInfoTypes } from '@/pages/onboarding/types';

export const usePostOnboard = () => {
  return useMutation({
    mutationFn: ({
      name,
      phoneNumber,
      level,
      nickname,
      profileImageUrl,
      genres,
      accessToken,
    }: onboardInfoTypes & tokenTypes) =>
      postOnboard({
        name,
        phoneNumber,
        level,
        nickname,
        profileImageUrl,
        genres,
        accessToken,
      }),

    onError: (error: AxiosError) => {
      if (!error.response) return;
      console.log(error);
    },
  });
};
