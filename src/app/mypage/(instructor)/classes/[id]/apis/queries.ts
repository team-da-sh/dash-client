import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getLessonDetail,
  postLessonApprove,
  postLessonCancel,
} from '@/app/mypage/(instructor)/classes/[id]/apis/axios';
import type { TabStatus } from '@/app/mypage/(instructor)/classes/[id]/types/api';
import type { LessonDetailGetResponse } from '@/app/mypage/(instructor)/classes/[id]/types/api';
import { teacherKeys } from '@/shared/constants/queryKey';

export const useGetLessonDetail = (lessonId: number, selectedTab: TabStatus) => {
  return useQuery<LessonDetailGetResponse>({
    queryKey: teacherKeys.me._ctx.lesson._ctx.students(lessonId, selectedTab).queryKey,
    queryFn: () => getLessonDetail(lessonId, selectedTab),

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
