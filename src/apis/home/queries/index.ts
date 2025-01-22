import { useQuery } from '@tanstack/react-query';
import { getAdvertisements, getPopularGenres } from '@/apis/home/axios';

export const useAdvertisements = () => {
  return useQuery({
    queryKey: ['advertisements'],
    queryFn: () => getAdvertisements(),
  });
};

interface PopularGenreResponse {
  genres: string[];
}

export const useGetPopularGenres = () => {
  return useQuery<PopularGenreResponse>({
    queryKey: ['popularGenres'],
    queryFn: () => getPopularGenres(),
  });
};
