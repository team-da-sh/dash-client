import { useQuery } from '@tanstack/react-query';
import { getLessonDetail } from '@/pages/instructor/classDetail/apis/axios';
import type { LessonDetailGetResponse } from '@/pages/instructor/classDetail/types/api';
import { QUERY_KEYS } from '@/shared/constants/queryKey';

export const useGetLessonDetail = (lessonId: number) => {
  return useQuery<LessonDetailGetResponse>({
    queryKey: [QUERY_KEYS.MY_PAGE_LESSON_DETAIL, lessonId],
    queryFn: () => getLessonDetail(lessonId),

    enabled: lessonId !== undefined,
  });
};
