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

export const MAX_VERIFICATION_CODE = 6;

export const MAX_VERIFICATION_NUMBER = 5;

export const MAX_PHONENUMBER_LENGTH = 11;

export const MAX_NICKNAME_LENGTH = 8;

export const FINAL_ONBOARDING_STEP = 2;

export const TIMER_DURATION = 300;

export const REQUEST_DELAY = 10;

export const PHONE_AUTH_MESSAGES = {
  TRY_AGAIN: '잠시 후 다시 요청해주세요',
  CODE_MISMATCH: '인증번호가 일치하지 않아요',
  ALREADY_VERIFIED: '이미 인증이 완료되었어요',
  DUPLICATE_PHONE: '이미 등록된 전화번호에요',
  LIMIT_EXCEEDED: '인증 요청은 하루에 5회까지만 가능해요',
  SEND_FAILED: '인증번호 전송에 실패했어요',
  VERIFIED_SUCCESS: '전화번호 인증이 완료되었어요',
  CODE_SENT: '인증번호가 전송되었습니다',
} as const;
