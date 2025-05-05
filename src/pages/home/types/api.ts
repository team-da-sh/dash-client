import type { AdvertisementsTypes } from '@/pages/home/types/advertisementsTypes';
import type { LessonTypes } from '@/pages/home/types/classTypes';
import type { DancerTypes } from '@/pages/home/types/dancerTypes';

export interface AdvertisementResponseTypes {
  advertisements: AdvertisementsTypes[];
}

export interface PopularGenreResponseTypes {
  genres: string[];
}

export interface UpcomingLessonsResponseTypes {
  lessons: LessonTypes[];
}

export interface LatestLessonsResponseTypes {
  lessons: LessonTypes[];
}

export interface PopularDancersResponseTypes {
  teachers: DancerTypes[];
}
