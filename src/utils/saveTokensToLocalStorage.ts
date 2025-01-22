import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/constants/api';

export const saveTokensToLocalStorage = (accessToken: string, refreshToken: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
};
