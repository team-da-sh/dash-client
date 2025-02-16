import { tokenTypes } from '@/pages/onboarding/types/api';
import { onboardInfoTypes } from '@/pages/onboarding/types/onboardInfoTypes';
import { instance } from '@/shared/apis/instance';

export const postOnboard = async ({
  name,
  phoneNumber,
  level,
  nickname,
  profileImageUrl,
  genres,
  accessToken,
}: onboardInfoTypes & tokenTypes) => {
  const response = await instance.post(
    `/api/v1/members/onboard`,
    {
      name,
      phoneNumber,
      level,
      nickname,
      profileImageUrl,
      genres,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return { response };
};
