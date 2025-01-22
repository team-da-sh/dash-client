import { useQuery } from '@tanstack/react-query';
import { LessonTypes } from '@/pages/home/types/classTypes';
import { getAdvertisements, getRecommendationLessons, getUpcommingLessons } from '@/apis/home/axios';

export const useAdvertisements = () => {
  return useQuery({
    queryKey: ['advertisements'],
    queryFn: () => getAdvertisements(),
  });
};

interface UpcomingLessonsResponse {
  lessons: LessonTypes[];
}

export const useGetUpcomingLessons = () => {
  return useQuery<UpcomingLessonsResponse>({
    queryKey: ['upcomingLessons'],
    queryFn: () => getUpcommingLessons(),
  });
};

interface RecommendationLessonsResponse {
  lessons: LessonTypes[];
}

export const useGetRecommendationLessons = () => {
  return useQuery<RecommendationLessonsResponse>({
    queryKey: ['recommendationLessons'],
    queryFn: () => getRecommendationLessons(),
  });
};
