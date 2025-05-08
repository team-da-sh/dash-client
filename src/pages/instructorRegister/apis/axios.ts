import type { InstructorRegisterRequestTypes } from '@/pages/instructorRegister/types/api';
import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const postInstructorRegisterInfo = async (infoData: InstructorRegisterRequestTypes) => {
  const response = await instance.post(API_URL.TEACHERS, infoData);

  return response;
};

export const getInstructorRegisterInfo = async (teacherId: string) => {
  const url = `${API_URL.TEACHER_DETAIL_INTRODUCTION}/${teacherId}`;

  const { data } = await instance.get(url);
  return data;
};
