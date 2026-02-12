import { kyInstance } from '@/shared/apis/kyInstance';
import { API_URL } from '@/shared/constants/apiURL';

export const getAdvertisements = async () => {
  const data = await kyInstance.get(API_URL.ADVERTISEMENTS).json();
  return data;
};

export const postLogout = async () => {
  const data = await kyInstance.post(API_URL.AUTH_LOGOUT).json();
  return data;
};

export const getPopularGenres = async () => {
  const data = await kyInstance.get(API_URL.LESSONS_POPULAR_GENRES).json();
  return data;
};

export const getUpcomingLessons = async () => {
  const data = await kyInstance.get(API_URL.LESSONS_UPCOMING).json();
  return data;
};

export const getLatestLessons = async () => {
  const data = await kyInstance.get(API_URL.LESSONS_LATEST).json();
  return data;
};
