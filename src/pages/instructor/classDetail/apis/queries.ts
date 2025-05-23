import { useQuery } from '@tanstack/react-query';
import { getLessonDetail } from '@/pages/instructor/classDetail/apis/axios';
import type { LessonDetailGetResponse } from '@/pages/instructor/classDetail/types/api';
import { memberKeys } from '@/shared/constants/queryKey';

export const useGetLessonDetail = (lessonId: number) => {
  return useQuery<LessonDetailGetResponse>({
    queryKey: memberKeys.lessons(),
    queryFn: () => getLessonDetail(lessonId),

    enabled: lessonId !== undefined,
  });
};
