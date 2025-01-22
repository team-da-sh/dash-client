
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AdvertisementsTypes } from '@/pages/home/types/advertisementsTypes';
import { QUERY_KEYS } from '@/apis/constants/queryKey';
import { getAdvertisements, getMyPage, getPopularGenres } from '@/apis/home/axios';
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
