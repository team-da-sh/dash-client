import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import '@/pages/home/apis/axios';
import { getAdvertisements, getLatestLessons, getPopularGenres, getUpcomingLessons } from '@/pages/home/apis/axios';
import type {
  AdvertisementResponseTypes,
  LatestLessonsResponseTypes,
  PopularGenreResponseTypes,
  UpcomingLessonsResponseTypes,
} from '@/pages/home/types/api';
import type { LessonTypes } from '@/pages/home/types/classTypes';
import { advertisementKeys, lessonKeys } from '@/shared/constants/queryKey';

export const useGetAdvertisements = () => {
  return useQuery<AdvertisementResponseTypes>({
    queryKey: advertisementKeys._def,
    queryFn: getAdvertisements,
  });
};

export const useGetPopularGenres = () => {
  return useQuery<PopularGenreResponseTypes>({
    queryKey: lessonKeys.list._ctx.popular_genre.queryKey,
    queryFn: () => getPopularGenres(),
  });
};

const MAX_LESSON_COUNT = 15;

const selectLimitedLessons = <T extends { lessons: LessonTypes[] }>(data: T): T => {
  return data.lessons.length > MAX_LESSON_COUNT ? { ...data, lessons: data.lessons.slice(0, MAX_LESSON_COUNT) } : data;
};

export const useGetUpcomingLessons = () => {
  return useSuspenseQuery<UpcomingLessonsResponseTypes>({
    queryKey: lessonKeys.list._ctx.upcoming.queryKey,
    queryFn: () => getUpcomingLessons(),
    select: selectLimitedLessons,
  });
};

export const useGetLatestLessons = () => {
  return useQuery<LatestLessonsResponseTypes>({
    queryKey: lessonKeys.list._ctx.latest.queryKey,
    queryFn: () => getLatestLessons(),
    select: selectLimitedLessons,
  });
};
