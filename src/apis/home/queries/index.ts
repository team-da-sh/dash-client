import { useQuery } from '@tanstack/react-query';
import { DancerTypes } from '@/pages/home/types/dancerTypes';
import { getAdvertisements, getPopularDancers } from '@/apis/home/axios';

export const useAdvertisements = () => {
  return useQuery({
    queryKey: ['advertisements'],
    queryFn: () => getAdvertisements(),
  });
};

interface PopularDancersResponse {
  teachers: DancerTypes[];
}

export const useGetPopularDancers = () => {
  return useQuery<PopularDancersResponse>({
    queryKey: ['popularTeachers'],
    queryFn: () => getPopularDancers(),
  });
};
