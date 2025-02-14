import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getAdvertisements = async () => {
  const { data } = await instance.get(API_URL.ADVERTISEMENTS);

  return data;
};

export const getMyPage = async () => {
  const { data } = await instance.get(API_URL.MEMBERS_ME);

  return data;
};

export const postLogout = async () => {
  const { data } = await instance.post(API_URL.AUTH_LOGOUT);

  return data;
};

export const getPopularGenres = async () => {
  const { data } = await instance.get(API_URL.LESSONS_POPULAR_GENRES);

  return data;
};

export const getUpcommingLessons = async () => {
  const { data } = await instance.get(API_URL.LESSONS_UPCOMING);

  return data;
};

export const getRecommendationLessons = async () => {
  const { data } = await instance.get(API_URL.LESSONS_RECOMMENDATIONS);

  return data;
};

export const getPopularDancers = async () => {
  const { data } = await instance.get(API_URL.TEACHERS_POPULAR);

  return data;
};
