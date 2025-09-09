import { http, HttpResponse } from 'msw';
import { LESSON_DETAIL_MOCK } from '@/mocks/data/instructor';
import { API_URL } from '@/shared/constants/apiURL';

export const instructorHandlers = [
  http.get(`${import.meta.env.VITE_DEV_BASE_URL}${API_URL.TEACHERS_LESSONS_DETAIL}/${1}?status=APPROVE`, () => {
    return HttpResponse.json(LESSON_DETAIL_MOCK);
  }),
];
