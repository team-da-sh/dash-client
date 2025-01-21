import { onboardInfoTypes } from '@/pages/onboarding/types';
import { instance } from '@/apis/api';

export interface tokenTypes {
  accessToken: string;
  refreshToken: string;
}

export const patchOnboard = async ({
  name,
  phoneNumber,
  level,
  nickname,
  profileImageUrl,
  genres,
  accessToken,
  refreshToken,
}: onboardInfoTypes & tokenTypes) => {
  console.log(name, phoneNumber, level, nickname, profileImageUrl, genres, accessToken);
  const response = await instance.patch(
    `/api/v1/users/onboard`,
    {
      name: name,
      phoneNumber: phoneNumber,
      level: level,
      nickname: nickname,
      profileImageUrl: profileImageUrl,
      genres: genres,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return { response, accessToken, refreshToken };
};
