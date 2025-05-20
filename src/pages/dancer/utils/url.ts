export const expandYouTubeUrl = (channelName?: string): string => {
  return channelName ? `https://www.youtube.com/@${channelName}` : '';
};

export const expandInstagramUrl = (nickName?: string): string => {
  return nickName ? `https://www.instagram.com/${nickName}` : '';
};
