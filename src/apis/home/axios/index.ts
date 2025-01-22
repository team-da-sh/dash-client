import { instance } from '@/apis/api';
import { API_URL } from '@/apis/constants/apiURL';

export const getAdvertisements = async () => {
  const response = await instance.get(`/api/v1/advertisements`);

  return response;
};

export const getMyPage = async () => {
  const { data } = await instance.get(API_URL.MEMBERS_ME, {});

  return data;
};
