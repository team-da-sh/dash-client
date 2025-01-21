import axios from 'axios';

// .env 파일에서 환경 변수 불러오기
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

export const instance = axios.create({
  baseURL: import.meta.env.VITE_DEV_BASE_URL, // 기본 URL (env에서 가져오기)
  headers: {
    'Authorization': `Bearer ${accessToken}`, // Bearer 토큰 헤더
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
  },
});