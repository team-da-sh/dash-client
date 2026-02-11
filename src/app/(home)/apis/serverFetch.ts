import type {
  AdvertisementResponseTypes,
  LatestLessonsResponseTypes,
  PopularGenreResponseTypes,
  UpcomingLessonsResponseTypes,
} from '@/app/(home)/types/api';
import type { LessonTypes } from '@/app/(home)/types/classTypes';
import { API_URL } from '@/shared/constants/apiURL';

export const HOME_REVALIDATE_SECONDS = 300;

const fetchJson = async <T>(input: string, init?: RequestInit): Promise<T> => {
  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'http://localhost:3000';

  const url = new URL('/api' + input, baseUrl);

  const res = await fetch(url, {
    next: { revalidate: HOME_REVALIDATE_SECONDS },
    ...init,
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${input}: ${res.status} ${res.statusText}`);
  }

  return (await res.json()) as T;
};

export const fetchAdvertisements = async (): Promise<AdvertisementResponseTypes> => {
  return fetchJson<AdvertisementResponseTypes>(API_URL.ADVERTISEMENTS);
};

export const fetchPopularGenres = async (): Promise<PopularGenreResponseTypes> => {
  return fetchJson<PopularGenreResponseTypes>(API_URL.LESSONS_POPULAR_GENRES);
};

const MAX_LESSON_COUNT = 15;

const selectLimitedLessons = <T extends { lessons: LessonTypes[] }>(data: T): T => {
  return data.lessons.length > MAX_LESSON_COUNT ? { ...data, lessons: data.lessons.slice(0, MAX_LESSON_COUNT) } : data;
};

export const fetchUpcomingLessons = async (): Promise<UpcomingLessonsResponseTypes> => {
  const data = await fetchJson<UpcomingLessonsResponseTypes>(API_URL.LESSONS_UPCOMING);
  return selectLimitedLessons(data);
};

export const fetchLatestLessons = async (): Promise<LatestLessonsResponseTypes> => {
  const data = await fetchJson<LatestLessonsResponseTypes>(API_URL.LESSONS_LATEST);
  return selectLimitedLessons(data);
};
