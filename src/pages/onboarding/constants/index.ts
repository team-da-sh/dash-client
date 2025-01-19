export const INFO_KEY = {
  NAME: 'name',
  PHONE_NUMBER: 'phoneNumber',
  GENRES: 'genres',
  LEVEL: 'level',
  NICKNAME: 'nickName',
  PROFILE_IMAGE_URL: 'profileImageUrl',
} as const;

export const GENRELIST = [
  'HIPHOP',
  'FEMALEHIPHOP',
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

export const excludeSpecialBlankChar = /^[^!@#$%^&*(),.?":{}|<>_\[\]\\\-\/+=~`'\s]+$/;
