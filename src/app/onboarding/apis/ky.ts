import type { OnboardInfoTypes, PhoneRequestTypes, phoneVerifyTypes } from '@/app/onboarding/types/onboardInfoTypes';
import { kyInstance } from '@/shared/apis/kyInstance';
import { API_URL } from '@/shared/constants/apiURL';

// 온보딩 관련 API는 모두 BFF(`/api/**`)를 경유하며,
// accessToken은 httpOnly 쿠키(ACCESS_TOKEN 또는 TEMP_ACCESS_TOKEN)에서 읽혀 백엔드로 전달된다.

export const postOnboard = async ({ name, phoneNumber }: OnboardInfoTypes) => {
  const data = await kyInstance
    .post(API_URL.MEMBERS_ONBOARD, {
      json: { name, phoneNumber },
    })
    .json();
  return data;
};

export const postPhoneRequest = async ({ phoneNumber }: PhoneRequestTypes) => {
  const data = await kyInstance
    .post(API_URL.AUTH_PHONE_REQUEST, {
      json: { phoneNumber },
    })
    .json();
  return data;
};

interface PhoneVerifyResponseTypes {
  success?: boolean;
}

export const postPhoneVerify = async ({ phoneNumber, code }: phoneVerifyTypes): Promise<PhoneVerifyResponseTypes> => {
  const data = await kyInstance
    .post(API_URL.AUTH_PHONE_VERIFY, {
      json: { phoneNumber, code },
    })
    .json<PhoneVerifyResponseTypes>();

  return data;
};
