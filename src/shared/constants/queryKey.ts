interface lessonSearchTypes {
  genre: string;
  level: string;
  startDate: string | Date;
  endDate: string | Date;
  sortOption: string;
  keyword: string;
}

export const lessonKeys = {
  all: ['lessons'] as const,
  list: () => [...lessonKeys.all, 'list'],
  latest: () => [...lessonKeys.list(), 'latest'],
  popular_genre: () => [...lessonKeys.list(), 'popular'],
  upcoming: () => [...lessonKeys.list(), 'upcoming'],
  search: ({ genre, level, startDate, endDate, sortOption, keyword }: lessonSearchTypes) => [
    ...lessonKeys.list(),
    genre,
    level,
    startDate,
    endDate,
    sortOption,
    keyword,
  ],
  detail: (lessonId: number) => [...lessonKeys.all, lessonId],
  reserve_progress: (lessonId: number) => [...lessonKeys.detail(lessonId), 'reserve-progress'],
};

export const memberKeys = {
  all: ['members'] as const,
  me: () => [memberKeys.all, 'me'],
  lessons: () => [...memberKeys.me(), 'lessons'],
  lessons_thumbnails: () => [...memberKeys.lessons(), 'thumbnails'],
  reservations: () => [...memberKeys.me(), 'reservations'],
  reservations_list: () => [...memberKeys.reservations(), 'list'],
  reservations_detail: (reservationId: number) => [...memberKeys.reservations(), reservationId],
  statistics: () => [memberKeys.reservations, 'statistics'],
};

export const teacherKeys = {
  all: ['teachers'] as const,
  search: (keyword: string) => [teacherKeys.all, keyword],
  profile: (teacherId: number) => [...teacherKeys.all, teacherId],
  me: () => [...teacherKeys.all, 'me'],
  detail: () => [...teacherKeys.me(), 'detail'],
  thumbnails: () => [...teacherKeys.me(), 'thumbnails'],
};

export const myPageKeys = {
  all: ['myPage'] as const,
  favorites: () => [...myPageKeys.all, 'favorites'],
};

export const advertisementKeys = {
  all: ['advertisements'] as const,
};

export const locationKeys = {
  all: ['locations'] as const,
  search: (keyword: string) => [...locationKeys.all, keyword],
};

export const authKeys = {
  all: ['auth'] as const,
  reissue: () => [...authKeys.all, 'reissue'],
  role: () => [...authKeys.all, 'role'],
};
