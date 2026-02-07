/* eslint-disable @typescript-eslint/no-explicit-any */
import { createQueryKeys, mergeQueryKeys } from '@lukemorales/query-key-factory';
import type { TabStatus } from '@/app/my/(instructor)/manage-classes/[id]/types/api';
import type { LessonStatus } from '@/app/my/(instructor)/manage-classes/types/lessonStatus';
import type { ReservationStatus } from '@/app/my/(student)/classes/types/reservationStatus';
import type { ClassListParamsTypes } from '@/app/search/types/api';

type SearchKeyword = string | number | ClassListParamsTypes;

export const lessonKeys = createQueryKeys('lesson', {
  detail: (lessonId: number) => [lessonId],
  reserve: (lessonId: number) => ['reserve', lessonId],
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
          list: (status: ReservationStatus) => ({
            queryKey: [status],
          }),
          status: {
            queryKey: null,
          },
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
          list: (status: LessonStatus) => ({
            queryKey: [status],
          }),
          thumbnails: { queryKey: null },
          students: (lessonId: number, status: TabStatus) => ({ queryKey: [lessonId, status] }),
          status: { queryKey: null },
        },
      },
      account: { queryKey: null },
    },
  },
  nicknameValidation: (nickname: string) => ({
    queryKey: [nickname],
  }),
});

export const myPageKeys = createQueryKeys('myPage', {
  favorites: { queryKey: null },
});

export const advertisementKeys = createQueryKeys('advertisements', {});
export const bankKeys = createQueryKeys('banks', {});

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
  bankKeys,
  locationKeys,
  authKeys
);
