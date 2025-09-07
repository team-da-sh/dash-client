import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { postOnboard, postPhoneRequest, postPhoneVerify } from '@/pages/onboarding/apis/axios';
import type { tokenTypes } from '@/pages/onboarding/types/api';
import type { OnboardInfoTypes, PhoneRequestTypes, phoneVerifyTypes } from '@/pages/onboarding/types/onboardInfoTypes';

export const usePostOnboard = () => {
  return useMutation({
    mutationFn: ({ name, phoneNumber, accessToken }: OnboardInfoTypes & tokenTypes) =>
      postOnboard({
        name,
        phoneNumber,
        accessToken,
      }),

    onError: (error: AxiosError) => {
      if (!error.response) return;
      console.log(error);
    },
  });
};

export const usePostPhoneRequest = () => {
  return useMutation({
    mutationFn: ({ phoneNumber, accessToken }: PhoneRequestTypes & tokenTypes) =>
      postPhoneRequest({
        phoneNumber,
        accessToken,
      }),
    onError: (error: AxiosError) => {
      if (!error.response) return;
      console.log('인증번호 요청 실패:', error);
    },
  });
};

export const usePostPhoneVerify = () => {
  return useMutation({
    mutationFn: ({ phoneNumber, code, accessToken }: phoneVerifyTypes & tokenTypes) =>
      postPhoneVerify({
        phoneNumber,
        code,
        accessToken,
      }),
    onError: (error: AxiosError) => {
      if (!error.response) return;
      console.log('인증번호 확인 실패:', error);
    },
  });
};