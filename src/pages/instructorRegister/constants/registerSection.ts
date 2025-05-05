export const INFO_KEY = {
  IMAGE_URLS: 'imageUrls',
  INSTAGRAM: 'instagram',
  YOUTUBE: 'youtube',
  EDUCATIONS: 'educations',
  EXPERIENCES: 'experiences',
  PRIZES: 'prizes',
  DETAIL: 'detail',
  VIDEO_URLS: 'videoUrls',
} as const;

export const MIN_EDUCATION_INPUT_COUNT = 1;
export const MIN_CAREER_INPUT_COUNT = 1;
export const MIN_PRIZE_INPUT_COUNT = 1;

export const MAX_VIDEO_INPUT = 5;
export const MIN_VIDEO_INPUT = 1;

export const TOTAL_STEP = 6;

export const MIN_INTRODUCTION_LENGTH = 30;
export const MAX_INTRODUCTION_LENGTH = 500;
export const INTRODUCTION_LENGTH_ERROR_MSG = '30자 이상 작성해 주세요';
