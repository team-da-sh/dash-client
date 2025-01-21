import { instance } from '@/apis/api';
import { DancerDetail } from '@/pages/dancer/types';

export const getDancerDetail = async (teacherId: string): Promise<DancerDetail> => {
  const response = await instance.get(`/api/v1/teachers/${teacherId}`);
  return response.data;
};
