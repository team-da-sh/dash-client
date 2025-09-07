import type { TeacherAccountRequestTypes, TeacherAccountResponseTypes } from '@/pages/accountRegister/types/api';
import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getTeacherAccount = async (): Promise<TeacherAccountResponseTypes> => {
  const { data } = await instance.get(API_URL.TEACHER_ME_ACCOUNT);
  return data;
};

export const postTeacherAccount = async (accountData: TeacherAccountRequestTypes) => {
  const response = await instance.post(API_URL.TEACHER_ME_ACCOUNT, accountData);

  return response;
};
