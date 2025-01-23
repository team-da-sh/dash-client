export const INFO_KEY = {
  IMAGE_URLS: 'imageUrls',
  INSTAGRAM: 'instagram',
  YOUTUBE: 'youtube',
  EDUCATIONS: 'educations',
  EXPERIENCES: 'experiences',
  DETAIL: 'detail',
  VIDEO_URLS: 'videoUrls',
} as const;

export const VIDEO_INPUT_MAX = 5;

export const TOTAL_STEP = 6;

// 정규식
export const INSTAGRAM_REGEX = /^https?:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9_.-]+\/?$/;

export const YOUTUBE_REGEX =
  /^https?:\/\/(www\.)?youtube\.com\/(@[\w\-.\uac00-\ud7a3%]+|(channel|c|user)\/[\w\-]+)|youtu\.be\/[\w\-]+$/;
