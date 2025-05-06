export const extractUsernameFromUrl = (url?: string): string => {
  if (!url) return '';

  const cleanedUrl = url.split('?')[0];
  return cleanedUrl.split('/').filter(Boolean).pop() || '';
};
