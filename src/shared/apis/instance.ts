import axios from 'axios';
import { onErrorExpand, onErrorResponse, onResponse } from '@/shared/apis/interceptor';

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
