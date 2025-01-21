import { useQuery } from '@tanstack/react-query';
import { getLessonDetail } from '@/apis/class/axios';
import { LessonDetail } from "@/pages/class/types";

export const useLessonDetail = (lessonId: string) => {
  return useQuery<LessonDetail, Error>({
    queryKey: ['lessonDetail', lessonId],
    queryFn: () => getLessonDetail(lessonId),
  });
};