import type { TeacherAccountRequestTypes } from '@/pages/accountRegister/types/api';
import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const postTeacherAccount = async (accountData: TeacherAccountRequestTypes) => {
  const response = await instance.post(API_URL.TEACHER_ME_ACCOUNT, accountData);

  return response;
};
