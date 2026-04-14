import { kyInstance } from '@/shared/apis/kyInstance';
import { API_URL } from '@/shared/constants/apiURL';
import type { BankListResponseTypes, TeacherAccountResponseTypes } from '@/shared/types/api';
import type { RoleNameResponseTypes } from '@/shared/types/myPageTypes';

interface PostImageResponseTypes {
  imageUrl?: string;
}

export const postImage = async (formData: FormData): Promise<PostImageResponseTypes> => {
  const data = await kyInstance
    .post(API_URL.IMAGES, {
      body: formData,
      headers: {
        'Content-Type': undefined,
      },
    })
    .json<PostImageResponseTypes>();
  return data;
};

export const postRole = async (): Promise<RoleNameResponseTypes> => {
  const data = await kyInstance.post(API_URL.AUTH_ROLE).json<RoleNameResponseTypes>();
  return data;
};

export const getBankList = async (): Promise<BankListResponseTypes[]> => {
  const data = await kyInstance.get(API_URL.BANKS).json<BankListResponseTypes[]>();
  return data;
};

export const getTeacherAccount = async (): Promise<TeacherAccountResponseTypes> => {
  const data = await kyInstance.get(API_URL.TEACHER_ME_ACCOUNT).json<TeacherAccountResponseTypes>();
  return data;
};

// TODO-userproperty: GET v1/users/me 백엔드 생성 후 실제 응답 타입으로 교체
export interface MeResponseTypes {
  userId: number;
  role: '수강생' | '강사';
  teacherId?: number;
}

export const getMe = async (): Promise<MeResponseTypes> => {
  const data = await kyInstance.get(API_URL.USERS_ME).json<MeResponseTypes>();
  return data;
};
