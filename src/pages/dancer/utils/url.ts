export const extractUsernameFromUrl = (url?: string): string => {
  if (!url) return '';

  const cleanedUrl = url.split('?')[0];
  return cleanedUrl.split('/').filter(Boolean).pop() || '';
};

const isValidUrl = (url?: string) => {
  try {
    return url ? new URL(url) : null;
  } catch {
    return null;
  }
};

export const extractYouTubeHandleFromUrl = (url?: string): string => {
  const parsed = isValidUrl(url);
  if (!parsed) return '';

  const { hostname, pathname } = parsed;
  if (!hostname.includes('youtube.com')) return '';

  const handle = pathname.trim().slice(1); // remove leading "/"
  return handle.startsWith('@') && handle.length > 1 ? handle : '';
};

export const extractInstaHandleFromUrl = (url?: string): string => {
  const parsed = isValidUrl(url);
  if (!parsed) return '';

  const { hostname, pathname } = parsed;
  if (!hostname.includes('instagram.com')) return '';

  const [handle] = pathname.split('/').filter(Boolean);
  return handle ?? '';
};
