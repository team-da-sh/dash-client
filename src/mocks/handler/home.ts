import { http, HttpResponse } from 'msw';
import { POPULAR_GENRE_DATA, UPCOMING_LESSONS_DATA } from '@/mocks/data/home';
import { API_URL } from '@/shared/constants/apiURL';

let isFirstCall = 0;

export const homeHandlers = [
  http.get(`${import.meta.env.VITE_DEV_BASE_URL}${API_URL.LESSONS_POPULAR_GENRES}`, () => {
    return HttpResponse.json(POPULAR_GENRE_DATA);
  }),
  http.get(`${import.meta.env.VITE_DEV_BASE_URL}${API_URL.LESSONS_UPCOMING}`, () => {
    if (isFirstCall < 4) {
      isFirstCall++;
      return HttpResponse.json({ message: '에러 메세지입니다.' }, { status: 400 });
    }

    return HttpResponse.json(UPCOMING_LESSONS_DATA);
  }),
];
