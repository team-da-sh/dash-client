import type { tokenTypes } from '@/pages/onboarding/types/api';
import type { onboardInfoTypes } from '@/pages/onboarding/types/onboardInfoTypes';
import { instance } from '@/shared/apis/instance';

export const postOnboard = async ({
  name,
  phoneNumber,
  verificationCode,
  accessToken,
}: onboardInfoTypes & tokenTypes) => {
  const response = await instance.post(
    `/api/v1/members/onboard`,
    {
      name,
      phoneNumber,
      verificationCode,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return { response };
};
