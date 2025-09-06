import { useQuery } from '@tanstack/react-query';
import '@/pages/home/apis/axios';
import { getAdvertisements, getLatestLessons, getPopularGenres, getUpcommingLessons } from '@/pages/home/apis/axios';
import { MAX_POPULAR_GENRE_COUNT } from '@/pages/home/constants';
import type {
  AdvertisementResponseTypes,
  LatestLessonsResponseTypes,
  PopularGenreResponseTypes,
  UpcomingLessonsResponseTypes,
} from '@/pages/home/types/api';
import { advertisementKeys, lessonKeys } from '@/shared/constants/queryKey';

export const useGetAdvertisements = () => {
  return useQuery<AdvertisementResponseTypes>({
    queryKey: advertisementKeys._def,
    queryFn: getAdvertisements,
  });
};

export const useGetPopularGenres = () => {
  // 장르가 3개 미만인 경우 DUMMY 장르 넘겨줌
  const transformGenres = (data: PopularGenreResponseTypes): PopularGenreResponseTypes => {
    if (data.genres.length >= MAX_POPULAR_GENRE_COUNT) return data;

    const tempGenres = [...data.genres].concat(
      Array.from({ length: MAX_POPULAR_GENRE_COUNT - data.genres.length }, () => 'DUMMY')
    );
    return { ...data, genres: tempGenres };
  };

  return useQuery<PopularGenreResponseTypes>({
    queryKey: lessonKeys.list._ctx.popular_genre.queryKey,
    queryFn: () => getPopularGenres(),
    select: transformGenres,
  });
};

export const useGetUpcomingLessons = () => {
  return useQuery<UpcomingLessonsResponseTypes>({
    queryKey: lessonKeys.list._ctx.upcoming.queryKey,
    queryFn: () => getUpcommingLessons(),
  });
};

export const useGetLatestLessons = () => {
  return useQuery<LatestLessonsResponseTypes>({
    queryKey: lessonKeys.list._ctx.latest.queryKey,
    queryFn: () => getLatestLessons(),
  });
};
