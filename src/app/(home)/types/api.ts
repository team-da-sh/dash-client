import type { AdvertisementsTypes } from '@/app/(home)/types/advertisementsTypes';
import type { LessonTypes } from '@/app/(home)/types/classTypes';
import type { DancerTypes } from '@/app/(home)/types/dancerTypes';

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
