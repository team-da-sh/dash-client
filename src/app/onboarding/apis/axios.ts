import type { OnboardInfoTypes, PhoneRequestTypes, phoneVerifyTypes } from '@/app/onboarding/types/onboardInfoTypes';
import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

// 온보딩 관련 API는 모두 BFF(`/api/**`)를 경유하며,
// accessToken은 httpOnly 쿠키(ACCESS_TOKEN 또는 TEMP_ACCESS_TOKEN)에서 읽혀 백엔드로 전달된다.

export const postOnboard = async ({ name, phoneNumber }: OnboardInfoTypes) => {
  const response = await instance.post(API_URL.MEMBERS_ONBOARD, {
    name,
    phoneNumber,
  });

  return { response };
};

export const postPhoneRequest = async ({ phoneNumber }: PhoneRequestTypes) => {
  const response = await instance.post(API_URL.AUTH_PHONE_REQUEST, {
    phoneNumber,
  });

  return { response };
};

export const postPhoneVerify = async ({ phoneNumber, code }: phoneVerifyTypes) => {
  const response = await instance.post(API_URL.AUTH_PHONE_VERIFY, {
    phoneNumber,
    code,
  });

  return response.data;
};
