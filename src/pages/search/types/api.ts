import type { Dancer } from '@/pages/search/types/dancer';

export interface DancerListParams {
  keyword?: string;
}

export interface ClassListParams {
  genre?: string;
  level?: string;
  startDate?: string;
  endDate?: string;
  sortOption?: string;
  keyword?: string;
}

export interface DancerListResponse {
  teachers: Dancer[];
}

export interface Class {
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

export interface ClassListResponse {
  lessons: Class[];
}
