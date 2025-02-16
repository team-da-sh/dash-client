import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';
import { ClassRegisterInfoTypes } from '../types/api';

export const getLocationList = async (query: string) => {
  const { data } = await instance.get(API_URL.LOCATIONS, {
    params: {
      query,
    },
  });

  return data;
};

export const postClassRegisterInfo = async (infoData: ClassRegisterInfoTypes) => {
  const { data } = await instance.post(API_URL.LESSONS, infoData);

  return data;
};
