import type { TeacherAccountResponseTypes } from '@/pages/accountRegister/types/api';
import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getTeacherAccount = async (): Promise<TeacherAccountResponseTypes> => {
  const { data } = await instance.get(API_URL.TEACHER_ME_ACCOUNT);
  return data;
};
