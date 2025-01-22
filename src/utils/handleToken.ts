import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/constants/api';

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};

export const setAccessToken = (accessToken: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
};

export const setRefreshToken = (refreshToken: string) => {
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
};

export const deleteAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};

export const deleteRefreshToken = () => {
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};

export const getStorage = () => {
  return [localStorage.getItem(ACCESS_TOKEN_KEY), localStorage.getItem(REFRESH_TOKEN_KEY)];
};

export const setStorage = (accessToken: string, refreshToken: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
};

export const clearStorage = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};
