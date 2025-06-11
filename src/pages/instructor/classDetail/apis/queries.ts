import { useQuery } from '@tanstack/react-query';
import { getLessonDetail } from '@/pages/instructor/classDetail/apis/axios';
import type { LessonDetailGetResponse } from '@/pages/instructor/classDetail/types/api';
import { teacherKeys } from '@/shared/constants/queryKey';

export const useGetLessonDetail = (lessonId: number) => {
  return useQuery<LessonDetailGetResponse>({
    queryKey: teacherKeys.me._ctx.lesson._ctx.students(lessonId).queryKey,
    queryFn: () => getLessonDetail(lessonId),

    enabled: lessonId !== undefined,
  });
};
