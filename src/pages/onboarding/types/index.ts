export type onboardInfoTypes = {
  name: string;
  phoneNumber: string;
  genres: GenreTypes[];
  level: null | LevelTypes;
  nickname: string;
  profileImageUrl: string;
};

export type GenreTypes =
  | 'HIPHOP'
  | 'FEMALEHIPHOP'
  | 'POPPING'
  | 'BRAKING'
  | 'WAACKING'
  | 'LOCKING'
  | 'HOUSE'
  | 'VOGUING'
  | 'KRUMP'
  | 'SOUL'
  | 'CHOREOGRAPHY'
  | 'KPOP'
  | null;

export type LevelTypes = 'BEGINNER' | 'NOVICE' | 'INTERMEDIATE' | 'ADVANCED';

export type KO_LEVELS = '입문' | '초급' | '중급' | '고급';
