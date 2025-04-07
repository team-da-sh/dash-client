import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import '@/pages/home/apis/axios';
import {
  getAdvertisements,
  getMyPage,
  getPopularDancers,
  getPopularGenres,
  getRecommendationLessons,
  getUpcommingLessons,
} from '@/pages/home/apis/axios';
import type {
  AdvertisementResponseTypes,
  PopularDancersResponseTypes,
  PopularGenreResponseTypes,
  RecommendationLessonsResponseTypes,
  UpcomingLessonsResponseTypes,
} from '@/pages/home/types/api';
import { QUERY_KEYS } from '@/shared/constants/queryKey';
import type { MyPageProps } from '@/shared/types/myPageTypes';

export const useGetAdvertisements = () => {
  return useQuery<AdvertisementResponseTypes>({
    queryKey: [QUERY_KEYS.ADVERTISEMENTS],
    queryFn: getAdvertisements,
  });
};

// 마이페이지 조회
export const useGetMyPage = (options?: Partial<UseQueryOptions<MyPageProps>>) => {
  return useQuery<MyPageProps>({
    queryKey: [QUERY_KEYS.MEMBERS_ME],
    queryFn: getMyPage,
    ...options,
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

export const useGetRecommendationLessons = () => {
  return useQuery<RecommendationLessonsResponseTypes>({
    queryKey: [QUERY_KEYS.LESSONS_RECOMMENDATIONS],
    queryFn: () => getRecommendationLessons(),
  });
};

export const useGetPopularDancers = () => {
  return useQuery<PopularDancersResponseTypes>({
    queryKey: [QUERY_KEYS.TEACHERS_POPULAR],
    queryFn: () => getPopularDancers(),
  });
};
