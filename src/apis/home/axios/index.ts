import { instance } from '@/apis/api';

export const getAdvertisements = async () => {
  const response = await instance.get(`/api/v1/advertisements`);

  return response;
};

export const getPopularDancers = async () => {
  const { data } = await instance.get(`/api/v1/teachers/popular`);

  return data;
};
