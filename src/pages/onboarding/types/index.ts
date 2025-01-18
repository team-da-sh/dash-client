export type onboardInfoTypes = {
  name: string;
  phoneNumber: string;
  genres: GenreTypes[];
  level: LevelTypes[];
};

type GenreTypes =
  | 'LOCKING'
  | 'VOGUING'
  | 'BRAKING'
  | 'SOUL'
  | 'WAACKING'
  | 'CHOREOGRAPHY'
  | 'KRUMP'
  | 'POPPING'
  | 'FEMALEHIPHOP'
  | 'HOUSE'
  | 'KPOP';

type LevelTypes = 'BEGINNER' | 'NOVICE' | 'INTERMEDIATE' | 'ADVANCED';
