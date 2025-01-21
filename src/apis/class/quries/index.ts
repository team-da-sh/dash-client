import { useQuery } from '@tanstack/react-query';
import { getLessonDetail, LessonDetail } from '@/apis/class/axios';

export const useLessonDetail = (lessonId: string) => {
  return useQuery<LessonDetail, Error>({
    queryKey: ['lessonDetail', lessonId],
    queryFn: () => getLessonDetail(lessonId), // API 요청
  });
};