import type { AdvertisementsTypes } from '@/pages/home/types/advertisementsTypes';
import type { LessonTypes } from '@/pages/home/types/classTypes';
import type { DancerTypes } from '@/pages/home/types/dancerTypes';

export interface AdvertisementResponse {
  advertisements: AdvertisementsTypes[];
}

export interface PopularGenreResponse {
  genres: string[];
}

export interface UpcomingLessonsResponse {
  lessons: LessonTypes[];
}

export interface RecommendationLessonsResponse {
  lessons: LessonTypes[];
}

export interface PopularDancersResponse {
  teachers: DancerTypes[];
}
