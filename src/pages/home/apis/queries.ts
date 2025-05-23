import { useQuery } from '@tanstack/react-query';
import '@/pages/home/apis/axios';
import { getAdvertisements, getLatestLessons, getPopularGenres, getUpcommingLessons } from '@/pages/home/apis/axios';
import { MAX_POPULAR_GENRE_COUNT } from '@/pages/home/constants';
import type {
  AdvertisementResponseTypes,
  PopularGenreResponseTypes,
  LatestLessonsResponseTypes,
  UpcomingLessonsResponseTypes,
} from '@/pages/home/types/api';
import { advertisementKeys, lessonKeys } from '@/shared/constants/queryKey';

export const useGetAdvertisements = () => {
  return useQuery<AdvertisementResponseTypes>({
    queryKey: advertisementKeys.all,
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
    queryKey: lessonKeys.popular_genre(),
    queryFn: () => getPopularGenres(),
    select: transformGenres,
  });
};

export const useGetUpcomingLessons = () => {
  return useQuery<UpcomingLessonsResponseTypes>({
    queryKey: lessonKeys.upcoming(),
    queryFn: () => getUpcommingLessons(),
  });
};

export const useGetLatestLessons = () => {
  return useQuery<LatestLessonsResponseTypes>({
    queryKey: lessonKeys.latest(),
    queryFn: () => getLatestLessons(),
  });
};
