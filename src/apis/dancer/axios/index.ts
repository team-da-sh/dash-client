import { useQuery } from '@tanstack/react-query';
import { DancerDetail } from "@/pages/dancer/types";
import { getDancerDetail } from "@/apis/dancer/queries";

export const useDancerDetail = (teacherId: string) => {
  return useQuery<DancerDetail, Error>({
    queryKey: ['dancerDetail', teacherId],
    queryFn: () => getDancerDetail(teacherId),
  });
};