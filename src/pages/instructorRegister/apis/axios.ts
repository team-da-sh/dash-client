import type { InstructorRegisterRequestTypes } from '@/pages/instructorRegister/types/api';
import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const postInstructorRegisterInfo = async (infoData: InstructorRegisterRequestTypes) => {
  const response = await instance.post(API_URL.TEACHERS, infoData);
  console.log('response', response);

  return response;
};

export const getInstructorRegisterInfo = async () => {
  const { data } = await instance.get(API_URL.TEACHER_DETAIL_INTRODUCTION);
  return data;
};

export const patchInstructorRegisterInfo = async (infoData: InstructorRegisterRequestTypes) => {
  const response = await instance.patch(API_URL.TEACHER_ME, infoData);
  return response;
};
