import { GenreTypes } from '@/pages/onboarding/types/genreTypes';
import { LevelTypes } from '@/pages/onboarding/types/levelTypes';

export type onboardInfoTypes = {
  name: string;
  phoneNumber: string;
  genres: GenreTypes[];
  level: null | LevelTypes;
  nickname: string;
  profileImageUrl: string;
};
