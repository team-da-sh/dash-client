import { Lesson } from '@/pages/dancer/types/lesson';

export interface DancerDetailResponse {
  nickname: string;
  instagram?: string;
  youtube?: string;
  educations?: string[];
  experiences?: string[];
  detail: string;
  imageUrls: string[];
  videoUrls: string[];
  genres: string[];
  lessons: Lesson[];
}
