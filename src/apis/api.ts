import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_DEV_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 필요 시 interceptor 추가
