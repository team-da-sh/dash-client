import { useQuery } from '@tanstack/react-query';
import type { LessonResponseTypes } from '@/pages/instructor/classList/types/api';
import { memberKeys } from '@/shared/constants/queryKey';
import { getMyLessons } from './axios';

export const useGetMyLessons = () => {
  return useQuery<LessonResponseTypes>({
    queryKey: memberKeys.lessons(),
    queryFn: getMyLessons,
  });
};
