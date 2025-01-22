import { onboardInfoTypes } from '@/pages/onboarding/types';
import { instance } from '@/apis/api';

export interface tokenTypes {
  accessToken: string;
}

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
