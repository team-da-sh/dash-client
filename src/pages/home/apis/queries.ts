import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import '@/pages/home/apis/axios';
import {
  getAdvertisements,
  getMyPage,
  getPopularDancers,
  getPopularGenres,
  getRecommendationLessons,
  getUpcommingLessons,
} from '@/pages/home/apis/axios';
import {
  AdvertisementResponse,
  PopularDancersResponse,
  PopularGenreResponse,
  RecommendationLessonsResponse,
  UpcomingLessonsResponse,
} from '@/pages/home/types/api';
import { QUERY_KEYS } from '@/shared/constants/queryKey';
import { MyPageResponseTypes } from '@/shared/types/myPageTypes';

export const useGetAdvertisements = () => {
  return useQuery<AdvertisementResponse>({
    queryKey: [QUERY_KEYS.ADVERTISEMENTS],
    queryFn: getAdvertisements,
  });
};

// 마이페이지 조회
export const useGetMyPage = (options?: Partial<UseQueryOptions<MyPageResponseTypes>>) => {
  return useQuery<MyPageResponseTypes>({
    queryKey: [QUERY_KEYS.MEMBERS_ME],
    queryFn: getMyPage,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    ...options,
  });
};

export const useGetPopularGenres = () => {
  return useQuery<PopularGenreResponse>({
    queryKey: [QUERY_KEYS.LESSONS_POPULAR_GENRES],
    queryFn: () => getPopularGenres(),
  });
};

export const useGetUpcomingLessons = () => {
  return useQuery<UpcomingLessonsResponse>({
    queryKey: [QUERY_KEYS.LESSONS_UPCOMING],
    queryFn: () => getUpcommingLessons(),
  });
};

export const useGetRecommendationLessons = () => {
  return useQuery<RecommendationLessonsResponse>({
    queryKey: [QUERY_KEYS.LESSONS_RECOMMENDATIONS],
    queryFn: () => getRecommendationLessons(),
  });
};

export const useGetPopularDancers = () => {
  return useQuery<PopularDancersResponse>({
    queryKey: [QUERY_KEYS.TEACHERS_POPULAR],
    queryFn: () => getPopularDancers(),
  });
};
