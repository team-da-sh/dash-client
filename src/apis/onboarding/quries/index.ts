import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { onboardInfoTypes } from '@/pages/onboarding/types';
import { postOnboard, tokenTypes } from '@/apis/onboarding/axios';

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
