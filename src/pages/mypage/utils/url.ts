export const getFullUrl = (platform: 'instagram' | 'youtube', value: string) => {
  if (platform === 'instagram') {
    return `https://www.instagram.com/${value}`;
  }
  if (platform === 'youtube') {
    return `https://${value}`;
  }
  return '#';
};
