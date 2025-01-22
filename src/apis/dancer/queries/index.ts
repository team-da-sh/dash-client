import { QUERY_KEYS } from '@/apis/constants/queryKey';
import { useQuery } from '@tanstack/react-query';
import { DancerDetail } from "@/pages/dancer/types";
import { getDancerDetail } from "@/apis/dancer/axios";

export const useGetDancerDetail = (teacherId: string) => {
  return useQuery<DancerDetail, Error>({
    queryKey: [QUERY_KEYS.TEACHER_DETAIL],
    queryFn: () => getDancerDetail(teacherId),
  });
};