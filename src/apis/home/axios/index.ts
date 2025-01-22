import { instance } from '@/apis/api';
import { API_URL } from '@/apis/constants/apiURL';

export const getAdvertisements = async () => {
  const { data } = await instance.get(API_URL.ADVERTISEMENTS);

  return data;
};

export const getMyPage = async () => {
  const { data } = await instance.get(API_URL.MEMBERS_ME, {});

  return data;
};
