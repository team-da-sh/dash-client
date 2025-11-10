import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getLessonDetail } from '@/pages/class/apis/axios';
import type { LessonDetailResponseTypes } from '@/pages/class/types/api';
import { lessonKeys } from '@/shared/constants/queryKey';

export const useGetLessonDetail = (lessonId: number, options?: { enabled?: boolean }) => {
  return useQuery<LessonDetailResponseTypes, AxiosError>({
    queryKey: lessonKeys.detail(lessonId).queryKey,
    queryFn: () => getLessonDetail(lessonId),
    enabled: options?.enabled ?? true,
  });
};
