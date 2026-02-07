import axios from 'axios';
import { onErrorExpand, onErrorResponse, onResponse } from '@/shared/apis/interceptor';

// Next.js rewrites를 통해 CORS 우회 (dev/production 모두 동일)
const baseURL = '/api';

export const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(onResponse);

instance.interceptors.response.use((response) => {
  return response;
}, onErrorResponse);

instance.interceptors.response.use((response) => {
  return response;
}, onErrorExpand);
