export const INFO_KEY = {
  NAME: 'name',
  PHONE_NUMBER: 'phoneNumber',
  GENRES: 'genres',
  LEVEL: 'level',
  NICKNAME: 'nickname',
  PROFILE_IMAGE_URL: 'profileImageUrl',
} as const;

export const GENRELIST = [
  'HIPHOP',
  'FEMALE_HIPHOP',
  'POPPING',
  'BRAKING',
  'WAACKING',
  'LOCKING',
  'HOUSE',
  'VOGUING',
  'KRUMP',
  'SOUL',
  'CHOREOGRAPHY',
  'KPOP',
];

export const LEVELS = {
  입문: 'BEGINNER',
  초급: 'NOVICE',
  중급: 'INTERMEDIATE',
  고급: 'ADVANCED',
} as const;

export const MIN_NAME_LENGTH = 2;

export const MAX_NAME_LENGTH = 8;

export const MAX_PHONENUMBER_LENGTH = 11;

export const MAX_NICKNAME_LENGTH = 8;

export const FINAL_ONBOARDING_STEP = 3;
