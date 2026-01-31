import axios from 'axios';
import { onErrorExpand, onErrorResponse, onResponse } from '@/shared/apis/interceptor';

// 개발환경에서는 Next.js 프록시(/api)를 사용하여 CORS 우회
const isDevelopment = process.env.NODE_ENV === 'development';
const baseURL = isDevelopment ? '/api' : process.env.NEXT_PUBLIC_DEV_BASE_URL;

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
