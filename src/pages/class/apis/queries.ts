import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getLessonDetail } from '@/pages/class/apis/axios';
import type { LessonDetailResponseTypes } from '@/pages/class/types/api';
import { lessonKeys } from '@/shared/constants/queryKey';

export const useGetLessonDetail = (lessonId: number) => {
  return useQuery<LessonDetailResponseTypes, AxiosError>({
    queryKey: lessonKeys.detail(lessonId),
    queryFn: () => getLessonDetail(lessonId),
  });
};
