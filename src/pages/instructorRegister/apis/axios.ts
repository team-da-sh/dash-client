import type { InstructorRegisterRequestTypes } from '@/pages/instructorRegister/types/api';
import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const postInstructorRegisterInfo = async (infoData: InstructorRegisterRequestTypes) => {
  const response = await instance.post(API_URL.TEACHERS, infoData);

  return response;
};
