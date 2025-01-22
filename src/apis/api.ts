import axios from 'axios';

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

export const instance = axios.create({
  baseURL: import.meta.env.VITE_DEV_BASE_URL,

  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  },
});
