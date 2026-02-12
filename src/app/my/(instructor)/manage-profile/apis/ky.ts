import type {
  InstructorRegisterInfoResponseTypes,
  InstructorRegisterRequestTypes,
  InstructorRegisterResponseTypes,
  NicknameDuplicateResponseTypes,
} from '@/app/my/(instructor)/manage-profile/types/api';
import { kyInstance } from '@/shared/apis/kyInstance';
import { API_URL } from '@/shared/constants/apiURL';

export const postInstructorRegisterInfo = async (
  infoData: InstructorRegisterRequestTypes
): Promise<{ data: InstructorRegisterResponseTypes; status: number; ok: boolean }> => {
  const response = await kyInstance.post(API_URL.TEACHERS, { json: infoData });
  return {
    data: await response.json<InstructorRegisterResponseTypes>(),
    status: response.status,
    ok: response.ok,
  };
};

export const getInstructorRegisterInfo = async (): Promise<InstructorRegisterInfoResponseTypes> => {
  const data = await kyInstance.get(API_URL.TEACHER_DETAIL_INTRODUCTION).json<InstructorRegisterInfoResponseTypes>();
  return data;
};

export const patchInstructorRegisterInfo = async (infoData: InstructorRegisterRequestTypes) => {
  const response = await kyInstance.patch(API_URL.TEACHERS_ME, { json: infoData });
  return { data: await response.json(), status: response.status, ok: response.ok };
};

export const getNicknameDuplicate = async (nickname: string): Promise<NicknameDuplicateResponseTypes> => {
  const data = await kyInstance
    .get(API_URL.TEACHER_NICKNAME_VALIDATION, {
      searchParams: { nickname },
    })
    .json<NicknameDuplicateResponseTypes>();
  return data;
};
