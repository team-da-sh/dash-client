import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getLessonDetail } from '@/pages/class/apis/axios';
import type { LessonDetailResponse } from '@/pages/class/types/api';
import { QUERY_KEYS } from '@/shared/constants/queryKey';

export const useGetLessonDetail = (lessonId: string) => {
  return useQuery<LessonDetailResponse, AxiosError>({
    queryKey: [QUERY_KEYS.LESSON_DETAIL, lessonId],
    queryFn: () => getLessonDetail(lessonId),
  });
};
