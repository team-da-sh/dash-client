import { useMutation, useQuery } from '@tanstack/react-query';
import { getLessonDetail, postLessonApprove, postLessonCancel } from '@/pages/instructor/classDetail/apis/axios';
import type { LessonDetailGetResponse } from '@/pages/instructor/classDetail/types/api';
import { teacherKeys } from '@/shared/constants/queryKey';

export const useGetLessonDetail = (lessonId: number) => {
  return useQuery<LessonDetailGetResponse>({
    queryKey: teacherKeys.me._ctx.lesson._ctx.students(lessonId).queryKey,
    queryFn: () => getLessonDetail(lessonId),

    enabled: lessonId !== undefined,
  });
};

export const useLessonApproveMutation = () => {
  return useMutation({
    mutationFn: ({ lessonId, reservationId }: { lessonId: number; reservationId: number }) =>
      postLessonApprove(lessonId, reservationId),
  });
};

export const useLessonCancelMutation = () => {
  return useMutation({
    mutationFn: ({ lessonId, reservationId }: { lessonId: number; reservationId: number }) =>
      postLessonCancel(lessonId, reservationId),
  });
};
