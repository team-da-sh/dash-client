import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { postOnboard } from '@/pages/onboarding/apis/axios';
import { tokenTypes } from '@/pages/onboarding/types/api';
import { onboardInfoTypes } from '@/pages/onboarding/types/onboardInfoTypes';

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
