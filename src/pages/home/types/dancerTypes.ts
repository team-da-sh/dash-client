import type { GenreTypes } from '@/pages/onboarding/types/genreTypes';

export type DancerTypes = {
  id: number;
  nickname: string;
  profileImage: string;
  genres: GenreTypes[];
};
