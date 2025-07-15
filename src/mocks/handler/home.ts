import { http, HttpResponse } from 'msw';
import { POPULAR_GENRE_DATA } from '@/mocks/data/home';
import { API_URL } from '@/shared/constants/apiURL';

export const homeHandlers = [
  http.get(`${import.meta.env.VITE_DEV_BASE_URL}${API_URL.LESSONS_POPULAR_GENRES}`, () => {
    return HttpResponse.json(POPULAR_GENRE_DATA);
  }),
];
