import { useQuery } from '@tanstack/react-query';
import type { LessonResponseTypes } from '@/pages/instructor/classList/types/api';
import { teacherKeys } from '@/shared/constants/queryKey';
import { getMyLessons } from './axios';

export const useGetMyLessons = () => {
  return useQuery<LessonResponseTypes>({
    queryKey: teacherKeys.me._ctx.lesson.queryKey,
    queryFn: getMyLessons,
  });
};
