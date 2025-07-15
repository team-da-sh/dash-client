import { http, HttpResponse } from 'msw';
import { API_URL } from '@/shared/constants/apiURL';

export const classRegisterHandlers = [
  http.post(`${import.meta.env.VITE_DEV_BASE_URL}${API_URL.LESSONS}`, () => {
    return HttpResponse.json({ message: '수업을 생성할 권한이 없습니다.' }, { status: 403 });
  }),
];
