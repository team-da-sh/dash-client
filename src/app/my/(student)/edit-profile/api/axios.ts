import type { UpdateProfileRequestTypes } from '@/app/my/(student)/edit-profile/types/api';
import { kyInstance } from '@/shared/apis/kyInstance';
import { API_URL } from '@/shared/constants/apiURL';

export const patchMyProfile = async (profileData: UpdateProfileRequestTypes) => {
  const data = await kyInstance.patch(API_URL.MEMBERS_ME, { json: profileData }).json();
  return data;
};
