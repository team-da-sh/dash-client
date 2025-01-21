import { instance } from '@/apis/api';

export const getAdvertisements = async () => {
  const { data } = await instance.get(`/api/v1/advertisements`);

  return data;
};
