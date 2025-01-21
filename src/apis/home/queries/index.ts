import { useQuery } from '@tanstack/react-query';
import { getAdvertisements } from '@/apis/home/axios';

export const useAdvertisements = () => {
  return useQuery({
    queryKey: ['advertisements'],
    queryFn: () => getAdvertisements(),
  });
};
