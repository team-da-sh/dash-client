export const INFO_KEY = {
  NAME: 'name',
  PHONE_NUMBER: 'phoneNumber',

  // TODO 서버 논의 후 변환 필요
  VERIFICATION_CODE: 'verificationCode',
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

export const MAX_VERFICATION_CODE = 6;

export const MAX_PHONENUMBER_LENGTH = 11;

export const MAX_NICKNAME_LENGTH = 8;

export const FINAL_ONBOARDING_STEP = 2;

export const TIMER_DURATION = 300;

export const REQUEST_DELAY = 10;
