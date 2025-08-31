/* eslint-disable @typescript-eslint/no-explicit-any */
import { createQueryKeys, mergeQueryKeys } from '@lukemorales/query-key-factory';
import type { ClassListParamsTypes } from '@/pages/search/types/api';

type SearchKeyword = string | number | ClassListParamsTypes;

export const lessonKeys = createQueryKeys('lesson', {
  detail: (lessonId: number) => [lessonId],

  list: {
    queryKey: null,
    contextQueries: {
      latest: { queryKey: null },
      popular_genre: { queryKey: null },
      upcoming: { queryKey: null },

      search: (keyword: SearchKeyword) => ({
        queryKey: [keyword] as const,
      }),
    },
  },
});

export const memberKeys = createQueryKeys('member', {
  me: {
    queryKey: null,
    contextQueries: {
      reservation: {
        queryKey: null,
        contextQueries: {
          list: { queryKey: null },
          detail: (reservationId: number) => ({ queryKey: [reservationId] }),
          card: (reservationId: number) => ({ queryKey: ['card', reservationId] }),
          statistics: { queryKey: ['statistics'] },
        },
      },
    },
  },
});

export const teacherKeys = createQueryKeys('teacher', {
  list: {
    queryKey: null,
    contextQueries: {
      search: (keyword: any) => ({ queryKey: [keyword] }),
    },
  },
  me: {
    queryKey: null,
    contextQueries: {
      profile: (teacherId: number) => ({ queryKey: [teacherId] }),
      detail: { queryKey: null },
      lesson: {
        queryKey: null,
        contextQueries: {
          list: { queryKey: null },
          thumbnails: { queryKey: null },
          students: (lessonId: number) => ({ queryKey: [lessonId] }),
        },
      },
    },
  },
});

export const myPageKeys = createQueryKeys('myPage', {
  favorites: { queryKey: null },
});

export const advertisementKeys = createQueryKeys('advertisements', {});

export const locationKeys = createQueryKeys('locations', {
  search: (keyword: any) => ({ queryKey: [keyword] }),
});

export const authKeys = createQueryKeys('auth', {
  reissue: { queryKey: null },
  role: { queryKey: null },
});

export const queryKeys = mergeQueryKeys(
  lessonKeys,
  memberKeys,
  teacherKeys,
  myPageKeys,
  advertisementKeys,
  locationKeys,
  authKeys
);
