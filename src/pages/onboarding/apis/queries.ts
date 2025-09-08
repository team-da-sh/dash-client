import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { postOnboard, postPhoneRequest, postPhoneVerify } from '@/pages/onboarding/apis/axios';
import type { tokenTypes } from '@/pages/onboarding/types/api';
import type { OnboardInfoTypes, PhoneRequestTypes, phoneVerifyTypes } from '@/pages/onboarding/types/onboardInfoTypes';
import { notify } from '@/shared/components/Toast/Toast';
import { PHONE_AUTH_MESSAGES } from '@/pages/onboarding/constants';
import { ApiError } from '@/shared/types/api';

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
      notify({message: PHONE_AUTH_MESSAGES.SEND_FAILED, icon: 'fail', bottomGap: 'large'})
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
    onError: (error: AxiosError<ApiError>) => {
      if (!error.response) return;
      notify({message: PHONE_AUTH_MESSAGES.CODE_MISMATCH, icon: 'fail', bottomGap: 'large'})
    },
  });
};