import { getAccessToken } from './handleToken';

export const isLoggedIn = (): boolean => {
  const token = getAccessToken();

  return !!token;
};
