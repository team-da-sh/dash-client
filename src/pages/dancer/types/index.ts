export interface DancerDetail {
  nickname: string;
  instagram: string;
  youtube: string;
  educations: Array<{ education: string }>;
  experiences: Array<{ experience: string }>;
  detail: string;
  imageUrls: Array<{ imageUrl: string }>;
  videoUrls: Array<{ videoUrl: string }>;
  genres: string[];
  lessons: Array<{
    id: number;
    genre: string;
    level: string;
    name: string;
    imageUrl: string;
    remainingDays: number;
  }>;
}
