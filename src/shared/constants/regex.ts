import { YOUTUBE_URL_REGEX } from '@/shared/constants';

export const ONLY_NUMBER = /^\d*$/;

export const INCLUDE_SPECIAL = /[!@#$%^&*(),.?":{}|<>_\[\]\\\/+=~`'\-]/;

export const INCLUDE_BLANK = /^.*\s.*$/;

export const getYoutubeEmbedUrl = (url: string) => {
  const videoId = url.match(YOUTUBE_URL_REGEX)?.[1];
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
};
