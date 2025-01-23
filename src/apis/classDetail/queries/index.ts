import { useQuery } from '@tanstack/react-query';
import { getLessonDetail } from '@/apis/classDetail/axios';
import { QUERY_KEYS } from '@/apis/constants/queryKey';
import { LessonDetailGetResponse } from '@/types/myPageLessonDetailTypes';

export const useGetLessonDetail = (lessonId: number) => {
  return useQuery<LessonDetailGetResponse>({
    queryKey: [QUERY_KEYS.MY_PAGE_LESSON_DETAIL, lessonId],
    queryFn: () => getLessonDetail(lessonId),

    enabled: lessonId !== undefined,
  });
};
