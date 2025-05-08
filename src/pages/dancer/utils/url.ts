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

  const handle = pathname.trim().slice(1);
  const decodedHandle = decodeURIComponent(handle);

  return handle.startsWith('@') && decodedHandle.length > 1 ? decodedHandle : '';
};

export const extractInstaHandleFromUrl = (url?: string): string => {
  const parsed = isValidUrl(url);
  if (!parsed) return '';

  const { hostname, pathname } = parsed;
  if (!hostname.includes('instagram.com')) return '';

  const [handle] = pathname.split('/').filter(Boolean);
  const decodedHandle = decodeURIComponent(handle);
  return decodedHandle ?? '';
};
