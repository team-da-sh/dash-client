import type { GenreTypes } from '@/app/onboarding/types/genreTypes';

export type DancerTypes = {
  id: number;
  nickname: string;
  profileImage: string;
  genres: GenreTypes[];
};
