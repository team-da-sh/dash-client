import { AdvertisementsTypes } from '@/pages/home/types/advertisementsTypes';
import { instance } from '@/apis/api';

export const getAdvertisements = async () => {
  const response = await instance.get<AdvertisementsTypes[]>(`/api/v1/advertisements`);

  return response;
};
