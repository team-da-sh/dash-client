import { instance } from '@/apis/api';
import { API_URL } from '@/apis/constants/apiURL';

export const getLocationList = async (keyword: string) => {
  const { data } = await instance.get(API_URL.LOCATIONS, {
    params: {
      keyword,
    },
  });

  return data;
};
