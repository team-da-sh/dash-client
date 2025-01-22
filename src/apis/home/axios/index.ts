import { instance } from '@/apis/api';

export const getAdvertisements = async () => {
  const response = await instance.get(`/api/v1/advertisements`);

  return response;
};

export const getPopularGenres = async () => {
  const { data } = await instance.get(`/api/v1/lessons/popular-genres`);

  return data;
};
