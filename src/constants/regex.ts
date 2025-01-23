export const ONLY_NUMERIC = /\D/g;

export const ONLY_NUMBER = /^\d*$/;

export const INCLUDE_SPECIAL = /[!@#$%^&*(),.?":{}|<>_\[\]\\\/+=~`'\-]/;

export const INCLUDE_BLANK = /^.*\s.*$/;

export const getYoutubeEmbedUrl = (url: string) => {
  const videoId = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&]+)/)?.[1];
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
};