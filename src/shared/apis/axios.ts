import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';
import type { TeacherAccountResponseTypes } from '@/shared/types/api';

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

export const getTeacherAccount = async (): Promise<TeacherAccountResponseTypes> => {
  const { data } = await instance.get(API_URL.TEACHER_ME_ACCOUNT);
  return data;
};
