// queryKeys/lessonKeys.ts
import { createQueryKeys, mergeQueryKeys } from '@lukemorales/query-key-factory';

export type LessonSearchTypes = {
  genre: string;
  level: string;
  startDate: string;
  endDate: string;
  sortOption: string;
  keyword: string;
};

export const lessonKeys = createQueryKeys('lesson', {
  detail: (lessonId: number) => [lessonId],

  list: {
    queryKey: null,
    contextQueries: {
      latest: { queryKey: null },
      popular_genre: { queryKey: null },
      upcoming: { queryKey: null },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      search: (keyword: any) => ({
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  search: (keyword: any) => ({ queryKey: [keyword] }),
});

export const authKeys = createQueryKeys('auth', {
  reissue: { queryKey: null },
  role: { queryKey: null },
});

export const queryKeys = mergeQueryKeys(lessonKeys);
