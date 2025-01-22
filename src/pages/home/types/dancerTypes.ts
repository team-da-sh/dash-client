import { GenreTypes } from '@/pages/onboarding/types';

export type DancerTypes = {
  id: number;
  nickName: string;
  profileImage: string;
  genres: GenreTypes[];
};
