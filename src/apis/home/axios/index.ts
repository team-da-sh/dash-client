import { instance } from '@/apis/api';
import { API_URL } from '@/apis/constants/apiURL';
import { getAccessToken } from '@/utils/handleToken';

export const getAdvertisements = async () => {
  const response = await instance.get(`/api/v1/advertisements`);

  return response;
};

export const getMyPage = async () => {
  const token = getAccessToken();

  const { data } = await instance.get(API_URL.MEMBERS_ME, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
