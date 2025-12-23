import type { DancerDetailResponseTypes } from '@/pages/dancer/types/api';
import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getDancerDetail = async (teacherId: number): Promise<DancerDetailResponseTypes> => {
  const url = `${API_URL.TEACHER_DETAIL}/${teacherId}`;

  const { data } = await instance.get(url);
  return data;
};
