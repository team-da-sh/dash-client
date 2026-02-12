import { useQuery } from '@tanstack/react-query';
import type { LessonResponseTypes, LessonStatusResponseTypes } from '@/app/my/(instructor)/manage-classes/types/api';
import type { LessonStatus } from '@/app/my/(instructor)/manage-classes/types/lessonStatus';
import { teacherKeys } from '@/shared/constants/queryKey';
import { getLessonStatus, getMyLessons } from './ky';

export const useGetMyLessons = (status: LessonStatus) => {
  return useQuery<LessonResponseTypes>({
    queryKey: teacherKeys.me._ctx.lesson._ctx.list(status).queryKey,
    queryFn: () => getMyLessons(status),
  });
};

export const useGetLessonStatus = () => {
  return useQuery<LessonStatusResponseTypes>({
    queryKey: teacherKeys.me._ctx.lesson._ctx.status.queryKey,
    queryFn: getLessonStatus,
  });
};
