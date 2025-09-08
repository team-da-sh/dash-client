export const INSTRUCTOR_REGISTER_FORM_KEY = {
  NICKNAME: 'nickname',
  IMAGE_URLS: 'imageUrls',
  INSTAGRAM: 'instagram',
  YOUTUBE: 'youtube',
  EDUCATIONS: 'educations',
  EXPERIENCES: 'experiences',
  PRIZES: 'prizes',
  DETAIL: 'detail',
  VIDEO_URLS: 'videoUrls',

  IS_EDU_NONE_CHECKED: 'isEduNoneChecked',
  IS_CAREER_NONE_CHECKED: 'isCareerNoneChecked',
  IS_PRIZE_NONE_CHECKED: 'isPrizeNoneChecked',
  IS_VIDEO_NONE_CHECKED: 'isVideoNoneChecked',
} as const;

export const INSTRUCTOR_REGISTER_PLACEHOLDER = {
  INTRODUCTION: '저는 이런 댄서예요!',
  INSTAGRAM: 'dashdash.kr',
  YOUTUBE: 'dashofficial',
  EDUCATION: '대쉬대학교 실용무용학과 졸업',
  CAREER: 'NCT127 단독콘서트 ‘the LINK’ 퍼포먼스 디렉터',
  PRIZE: '2018 BATTLE LIINEUP 1등',
  VIDEO: 'https://www.youtube.com/watch?v=LPh1c0pGIi',
};

export const MIN_INTRODUCTION_LENGTH = 30;
export const MAX_INTRODUCTION_LENGTH = 500;

export const MIN_EDUCATION_INPUT_COUNT = 1;
export const MIN_CAREER_INPUT_COUNT = 1;
export const MIN_PRIZE_INPUT_COUNT = 1;
export const MAX_CAREER_INPUT_LENGTH = 50;

export const MIN_VIDEO_INPUT_COUNT = 1;
export const MAX_VIDEO_INPUT_COUNT = 5;

export const INTRODUCTION_LENGTH_ERROR_MSG = '30자 이상 작성해 주세요';

export const FORM_ERROR_MESSAGE = {
  INVALID: '특수기호, 띄어쓰기는 입력할 수 없어요.',
  DUPLICATE_DANCER_NAME: '이미 사용 중인 댄서 네임이에요.',
  EMPTY_DANCER_NAME: '댄서 네임을 입력해 주세요.',
};
