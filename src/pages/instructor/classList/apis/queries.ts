import { useQuery } from '@tanstack/react-query';
import type { LessonResponseTypes } from '@/pages/instructor/classList/types/api';
import { QUERY_KEYS } from '@/shared/constants/queryKey';
import { getMyLessons } from './axios';

export const useGetMyLessons = () => {
  return useQuery<LessonResponseTypes>({
    queryKey: [QUERY_KEYS.MY_PAGE_LESSONS],
    queryFn: getMyLessons,
  });
};
