import { useQuery } from '@tanstack/react-query';
import { AdvertisementsTypes } from '@/pages/home/types/advertisementsTypes';
import { getAdvertisements } from '@/apis/home/axios';

interface AdvertisementResponse {
  advertisements: AdvertisementsTypes[];
}

export const useGetAdvertisements = () => {
  return useQuery<AdvertisementResponse>({
    queryKey: ['advertisements'],
    queryFn: getAdvertisements,
  });
};
