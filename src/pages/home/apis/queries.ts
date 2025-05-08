import { useQuery } from '@tanstack/react-query';
import '@/pages/home/apis/axios';
import {
  getAdvertisements,
  getLatestLessons,
  getPopularDancers,
  getPopularGenres,
  getUpcommingLessons,
} from '@/pages/home/apis/axios';
import type {
  AdvertisementResponseTypes,
  PopularDancersResponseTypes,
  PopularGenreResponseTypes,
  LatestLessonsResponseTypes,
  UpcomingLessonsResponseTypes,
} from '@/pages/home/types/api';
import { QUERY_KEYS } from '@/shared/constants/queryKey';

export const useGetAdvertisements = () => {
  return useQuery<AdvertisementResponseTypes>({
    queryKey: [QUERY_KEYS.ADVERTISEMENTS],
    queryFn: getAdvertisements,
  });
};

export const useGetPopularGenres = () => {
  return useQuery<PopularGenreResponseTypes>({
    queryKey: [QUERY_KEYS.LESSONS_POPULAR_GENRES],
    queryFn: () => getPopularGenres(),
  });
};

export const useGetUpcomingLessons = () => {
  return useQuery<UpcomingLessonsResponseTypes>({
    queryKey: [QUERY_KEYS.LESSONS_UPCOMING],
    queryFn: () => getUpcommingLessons(),
  });
};

export const useGetLatestLessons = () => {
  return useQuery<LatestLessonsResponseTypes>({
    queryKey: [QUERY_KEYS.LESSONS_LATEST],
    queryFn: () => getLatestLessons(),
  });
};

export const useGetPopularDancers = () => {
  return useQuery<PopularDancersResponseTypes>({
    queryKey: [QUERY_KEYS.TEACHERS_POPULAR],
    queryFn: () => getPopularDancers(),
  });
};
