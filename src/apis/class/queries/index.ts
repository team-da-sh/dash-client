import { useQuery } from '@tanstack/react-query';
import { getLessonDetail } from '@/apis/class/axios';
import { LessonDetail } from "@/pages/class/types";
import { QUERY_KEYS } from "@/apis/constants/queryKey";

export const useLessonDetail = (lessonId: string) => {
  return useQuery<LessonDetail, Error>({
    queryKey: [QUERY_KEYS.LESSON_DETAIL],
    queryFn: () => getLessonDetail(lessonId),
  });
};