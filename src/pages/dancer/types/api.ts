export interface DancerDetailResponseTypes {
  nickname: string;
  instagram?: string;
  youtube?: string;
  educations?: string[];
  experiences?: string[];
  detail: string;
  imageUrls: string[];
  videoUrls: string[];
  genres: string[];
  lessons: ClassItemPropTypes[];
}

export interface ClassItemPropTypes {
  id: number;
  genre: string;
  level: string;
  name: string;
  imageUrl: string;
  remainingDays: number;
}
