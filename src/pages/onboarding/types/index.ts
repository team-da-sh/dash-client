export type onboardInfoTypes = {
  name: string;
  phoneNumber: string;
  genres: GenreTypes[];
  level: null | LevelTypes;
  nickName: string;
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
  | 'KPOP';

export type LevelTypes = 'BEGINNER' | 'NOVICE' | 'INTERMEDIATE' | 'ADVANCED';
