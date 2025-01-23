import { instance } from '@/apis/api';
import { API_URL } from "@/apis/constants/apiURL";
import { DancerDetailApiResponse } from '@/pages/dancer/types';

export const getDancerDetail = async (teacherId: string): Promise<DancerDetailApiResponse> => {
  const url = `${API_URL.TEACHER_DETAIL}/${teacherId}`;

  const { data } = await instance.get(url);
  return data;
};
