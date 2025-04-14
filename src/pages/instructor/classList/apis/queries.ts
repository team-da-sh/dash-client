import { useQuery } from '@tanstack/react-query';
import type { LessonResponse } from '@/pages/instructor/classList/types/api';
import { QUERY_KEYS } from '@/shared/constants/queryKey';
import { getMyLessons } from './axios';

export const useGetMyLessons = () => {
  return useQuery<LessonResponse>({
    queryKey: [QUERY_KEYS.MY_PAGE_LESSONS],
    queryFn: getMyLessons,
  });
};
