export interface Lesson {
  id: number;
  genre: string;
  level: string;
  name: string;
  imageUrl: string;
  remainingDays: number;
}
export interface DancerDetailApiResponse {
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