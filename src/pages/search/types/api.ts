import type { DancerTypes } from '@/pages/search/types/dancer';

export interface DancerListParamsTypes {
  keyword?: string;
}

export interface ClassListParamsTypes {
  genre?: string;
  level?: string;
  startDate?: string;
  endDate?: string;
  sortOption?: string;
  keyword?: string;
}

export interface DancerListResponseTypes {
  teachers: DancerTypes[];
}

export interface ClassTypes {
  id: number;
  genre: string;
  level: string;
  name: string;
  imageUrl: string;
  teacherProfileImage: string;
  teacherName: string;
  startDate: string;
  endDate: string;
  location: string;
  remainingDays: number;
}

export interface ClassListResponseTypes {
  lessons: ClassTypes[];
}
