import axios from 'axios';
import { onErrorResponse, onResponse } from '@/shared/apis/interceptor';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_DEV_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(onResponse);
instance.interceptors.response.use((response) => {
  return response;
}, onErrorResponse);
