import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/apis/constants/queryKey';
import { LessonApiResponse } from '@/types/lessonTypes';
import { getMyLessons } from '../axios';

export const useGetMyLessons = () => {
  return useQuery<LessonApiResponse>({
    queryKey: [QUERY_KEYS.MY_PAGE_LESSONS],
    queryFn: getMyLessons,
  });
};
