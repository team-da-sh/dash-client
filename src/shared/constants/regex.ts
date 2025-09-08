import { YOUTUBE_URL_REGEX } from '@/shared/constants';

export const ONLY_NUMBER = /^\d*$/;
export const ONLY_KOR_ENG_SPACE = /^[a-zA-Z가-힣\s]+$/;

export const ONLY_KOREAN = /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;

export const INCLUDE_SPECIAL = /[!@#$%^&*(),.?":{}|<>_\[\]\\\/+=~`'\-]/;

export const INCLUDE_BLANK = /^.*\s.*$/;

export const getYoutubeEmbedUrl = (url: string) => {
  const videoId = url.match(YOUTUBE_URL_REGEX)?.[1];
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
};
