import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { DancerDetailApiResponse } from '@/pages/dancer/types';
import { QUERY_KEYS } from '@/shared/apis/constants/queryKey';
import { getDancerDetail } from '@/shared/apis/dancer/axios';

export const useGetDancerDetail = (teacherId: string) => {
  return useQuery<DancerDetailApiResponse, AxiosError>({
    queryKey: [QUERY_KEYS.TEACHER_DETAIL, teacherId],
    queryFn: () => getDancerDetail(teacherId),
  });
};
