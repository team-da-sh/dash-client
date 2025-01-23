import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AdvertisementsTypes } from '@/pages/home/types/advertisementsTypes';
import { LessonTypes } from '@/pages/home/types/classTypes';
import { DancerTypes } from '@/pages/home/types/dancerTypes';
import { QUERY_KEYS } from '@/apis/constants/queryKey';
import '@/apis/home/axios';
import {
  getAdvertisements,
  getMyPage,
  getPopularGenres,
  getRecommendationLessons,
  getUpcommingLessons,
  getPopularDancers,
} from '@/apis/home/axios';
import { MyPageProps } from '@/types/myPageTypes';

interface AdvertisementResponse {
  advertisements: AdvertisementsTypes[];
}

export const useGetAdvertisements = () => {
  return useQuery<AdvertisementResponse>({
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

interface PopularGenreResponse {
  genres: string[];
}

export const useGetPopularGenres = () => {
  return useQuery<PopularGenreResponse>({
    queryKey: [QUERY_KEYS.LESSONS_POPULAR_GENRES],
    queryFn: () => getPopularGenres(),
  });
};

interface UpcomingLessonsResponse {
  lessons: LessonTypes[];
}

export const useGetUpcomingLessons = () => {
  return useQuery<UpcomingLessonsResponse>({
    queryKey: [QUERY_KEYS.LESSONS_UPCOMING],
    queryFn: () => getUpcommingLessons(),
  });
};

interface RecommendationLessonsResponse {
  lessons: LessonTypes[];
}

export const useGetRecommendationLessons = () => {
  return useQuery<RecommendationLessonsResponse>({
    queryKey: [QUERY_KEYS.LESSONS_RECOMMENDATIONS],
    queryFn: () => getRecommendationLessons(),
  });
};

interface PopularDancersResponse {
  teachers: DancerTypes[];
}

export const useGetPopularDancers = () => {
  return useQuery<PopularDancersResponse>({
    queryKey: [QUERY_KEYS.TEACHERS_POPULAR],
    queryFn: () => getPopularDancers(),
  });
};
