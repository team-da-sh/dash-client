import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const postImage = async (formData: FormData) => {
  const { data } = await instance.post(API_URL.IMAGES, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

export const postRole = async () => {
  const { data } = await instance.post(API_URL.AUTH_ROLE);

  return data;
};

export const getBankList = async () => {
  const { data } = await instance.get(API_URL.BANKS);
  return data;
};
