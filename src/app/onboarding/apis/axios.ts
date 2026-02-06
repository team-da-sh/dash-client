import type { tokenTypes } from '@/app/onboarding/types/api';
import type { OnboardInfoTypes, PhoneRequestTypes, phoneVerifyTypes } from '@/app/onboarding/types/onboardInfoTypes';
import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const postOnboard = async ({ name, phoneNumber, accessToken }: OnboardInfoTypes & tokenTypes) => {
  const response = await instance.post(
    API_URL.MEMBERS_ONBOARD,
    {
      name,
      phoneNumber,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return { response };
};

export const postPhoneRequest = async ({ phoneNumber, accessToken }: PhoneRequestTypes & tokenTypes) => {
  const response = await instance.post(
    API_URL.AUTH_PHONE_REQUEST,
    {
      phoneNumber,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return { response };
};

export const postPhoneVerify = async ({ phoneNumber, code, accessToken }: phoneVerifyTypes & tokenTypes) => {
  const response = await instance.post(
    API_URL.AUTH_PHONE_VERIFY,
    {
      phoneNumber,
      code,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};

export const postSetCookies = async ({ accessToken, refreshToken }: { accessToken: string; refreshToken: string }) => {
  const response = await instance.post('/api/auth/set-cookies', {
    accessToken,
    refreshToken,
  });

  return response.data;
};
