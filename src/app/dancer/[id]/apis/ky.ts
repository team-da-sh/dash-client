import type { DancerDetailResponseTypes } from '@/app/dancer/[id]/types/api';
import { kyInstance } from '@/shared/apis/kyInstance';
import { API_URL } from '@/shared/constants/apiURL';

export const getDancerDetail = async (teacherId: number): Promise<DancerDetailResponseTypes> => {
  const url = `${API_URL.TEACHER_DETAIL}/${teacherId}`;
  const data = await kyInstance.get(url).json<DancerDetailResponseTypes>();
  return data;
};
