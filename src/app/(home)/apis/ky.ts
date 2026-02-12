import type {
  AdvertisementResponseTypes,
  LatestLessonsResponseTypes,
  PopularGenreResponseTypes,
  UpcomingLessonsResponseTypes,
} from '@/app/(home)/types/api';
import type { LessonTypes } from '@/app/(home)/types/classTypes';
import { kyInstance } from '@/shared/apis/kyInstance';
import { API_URL } from '@/shared/constants/apiURL';

const HOME_REVALIDATE_SECONDS = 300;

const MAX_LESSON_COUNT = 15;

const selectLimitedLessons = <T extends { lessons: LessonTypes[] }>(data: T): T => {
  return data.lessons.length > MAX_LESSON_COUNT ? { ...data, lessons: data.lessons.slice(0, MAX_LESSON_COUNT) } : data;
};

export const getAdvertisements = async (): Promise<AdvertisementResponseTypes> => {
  return kyInstance
    .get(API_URL.ADVERTISEMENTS, { next: { revalidate: HOME_REVALIDATE_SECONDS } })
    .json<AdvertisementResponseTypes>();
};

export const getPopularGenres = async (): Promise<PopularGenreResponseTypes> => {
  return kyInstance
    .get(API_URL.LESSONS_POPULAR_GENRES, { next: { revalidate: HOME_REVALIDATE_SECONDS } })
    .json<PopularGenreResponseTypes>();
};

export const getUpcomingLessons = async (): Promise<UpcomingLessonsResponseTypes> => {
  const data = await kyInstance
    .get(API_URL.LESSONS_UPCOMING, { next: { revalidate: HOME_REVALIDATE_SECONDS } })
    .json<UpcomingLessonsResponseTypes>();
  return selectLimitedLessons(data);
};

export const getLatestLessons = async (): Promise<LatestLessonsResponseTypes> => {
  const data = await kyInstance
    .get(API_URL.LESSONS_LATEST, { next: { revalidate: HOME_REVALIDATE_SECONDS } })
    .json<LatestLessonsResponseTypes>();
  return selectLimitedLessons(data);
};
