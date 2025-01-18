export type onboardInfoTypes = {
  name: string;
  phoneNumber: string;
  genres: GenreTypes[];
  level: null | LevelTypes;
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
  | 'KPOP';

export type LevelTypes = 'BEGINNER' | 'NOVICE' | 'INTERMEDIATE' | 'ADVANCED';
