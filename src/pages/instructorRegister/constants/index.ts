export const INFO_KEY = {
  IMAGE_URL: 'imageUrl',
  INSTAGRAM: 'instagram',
  YOUTUBE: 'youtube',
  EDUCATION: 'education',
  EXPERIENCE: 'experience',
  DETAIL: 'detail',
  VIDEO_URLS: 'videoUrls',
} as const;

// 정규식
export const INSTAGRAM_REGEX = /^https?:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9_.-]+\/?$/;
export const YOUTUBE_REGEX =
  /^https?:\/\/(www\.)?youtube\.com\/(@[a-zA-Z0-9_]+|(channel|c|user)\/[a-zA-Z0-9_-]+)|youtu\.be\/[a-zA-Z0-9_-]+$/;
