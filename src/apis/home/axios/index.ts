import { instance } from '@/apis/api';

export const getAdvertisements = async () => {
  const response = await instance.get(`/api/v1/advertisements`);

  return response;
};

export const getUpcommingLessons = async () => {
  const { data } = await instance.get(`/api/v1/lessons/upcoming`);

  return data;
};

export const getRecommendationLessons = async () => {
  const { data } = await instance.get(`/api/v1/lessons/upcoming`);

  return data;
};
