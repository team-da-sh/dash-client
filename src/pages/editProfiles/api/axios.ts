import { UpdateProfileRequestTypes } from '@/pages/editProfiles/types/api';
import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const patchMyProfile = async (profileData: UpdateProfileRequestTypes) => {
  const { data } = await instance.patch(API_URL.MEMBERS_ME, profileData);

  return data;
};
