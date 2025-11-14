import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const postWithdraw = async () => {
  const { data } = await instance.post(API_URL.MEMBERS_WITHDRAW);

  return data;
};
