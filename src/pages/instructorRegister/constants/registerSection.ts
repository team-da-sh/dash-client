export const INSTRUCTOR_REGISTER_FORM_KEY = {
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

export const MIN_INTRODUCTION_LENGTH = 30;
export const MAX_INTRODUCTION_LENGTH = 500;

export const MIN_EDUCATION_INPUT_COUNT = 1;
export const MIN_CAREER_INPUT_COUNT = 1;
export const MIN_PRIZE_INPUT_COUNT = 1;
export const MAX_CAREER_INPUT_LENGTH = 50;

export const MIN_VIDEO_INPUT_COUNT = 1;
export const MAX_VIDEO_INPUT_COUNT = 5;

export const INTRODUCTION_LENGTH_ERROR_MSG = '30자 이상 작성해 주세요';
