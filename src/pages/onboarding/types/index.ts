export type onboardInfoTypes = {
  name: string;
  phoneNumber: string;
  genres: GenreTypes[];
  level: LevelTypes[];
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

type LevelTypes = 'BEGINNER' | 'NOVICE' | 'INTERMEDIATE' | 'ADVANCED';
