import type { MyPageResponseTypes, TeacherAccountRequestTypes } from '@/app/my/(instructor)/manage-account/types/api';
import { kyInstance } from '@/shared/apis/kyInstance';
import { API_URL } from '@/shared/constants/apiURL';

export const postTeacherAccount = async (accountData: TeacherAccountRequestTypes) => {
  const response = await kyInstance.post(API_URL.TEACHER_ME_ACCOUNT, { json: accountData });
  return { data: await response.json(), status: response.status, ok: response.ok };
};

export const getMyPage = async (): Promise<MyPageResponseTypes> => {
  const data = await kyInstance.get(API_URL.MEMBERS_ME).json<MyPageResponseTypes>();
  return data;
};
