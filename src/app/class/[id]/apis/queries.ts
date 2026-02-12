import { useQuery } from '@tanstack/react-query';
import { getLessonDetail } from '@/app/class/[id]/apis/ky';
import type { LessonDetailResponseTypes } from '@/app/class/[id]/types/api';
import { lessonKeys } from '@/shared/constants/queryKey';
import type { ApiError } from '@/shared/types/ApiError';

export const useGetLessonDetail = (lessonId: number, options?: { enabled?: boolean }) => {
  return useQuery<LessonDetailResponseTypes, ApiError>({
    queryKey: lessonKeys.detail(lessonId).queryKey,
    queryFn: () => getLessonDetail(lessonId),
    enabled: options?.enabled ?? true,
  });
};
