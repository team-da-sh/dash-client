import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getBankList = async () => {
  const { data } = await instance.get(API_URL.BANKS);
  return data;
};
