import { useQuery } from '@tanstack/react-query';
import { LessonDetailApiResponse } from '@/pages/class/types';
import { getLessonDetail } from '@/apis/class/axios';
import { QUERY_KEYS } from '@/apis/constants/queryKey';

export const useGetLessonDetail = (lessonId: string) => {
  return useQuery<LessonDetailApiResponse, Error>({
    queryKey: [QUERY_KEYS.LESSON_DETAIL, lessonId],
    queryFn: () => getLessonDetail(lessonId),
  });
};
