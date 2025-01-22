import { GenreTypes } from '@/pages/onboarding/types';

export type DancerTypes = {
  id: number;
  nickname: string;
  profileImage: string;
  genres: GenreTypes[];
};
