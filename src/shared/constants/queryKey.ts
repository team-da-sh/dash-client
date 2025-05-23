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
  search: ({ genre, level, startDate, endDate, sortOption, keyword }: lessonSearchTypes) => [
    ...lessonKeys.all,
    genre,
    level,
    startDate,
    endDate,
    sortOption,
    keyword,
  ],
  detail: (lessonId: number) => [...lessonKeys.all, lessonId],
  latest: () => [...lessonKeys.all, 'latest'],
  popular_genre: () => [...lessonKeys.all, 'popular'],
  upcoming: () => [...lessonKeys.all, 'upcoming'],
  reserve_progress: (lessonId: number) => [...lessonKeys.detail(lessonId), 'reserve-progress'],
};

export const memberKeys = {
  all: ['members'] as const,
  me: () => [memberKeys.all, 'me'],
  lessons: () => [...memberKeys.me(), 'lessons'],
  reservations: () => [...memberKeys.me(), 'reservations'],
  thumbnails: () => [...memberKeys.lessons(), 'thumbnails'],
  reservations_detail: (reservationId: number) => [...memberKeys.reservations(), reservationId],
  statistics: () => [memberKeys.reservations, 'statistics'],
};

export const teacherKeys = {
  all: ['teachers'] as const,
  search: (keyword: string) => [teacherKeys.all, keyword],
  profile: (teacherId: number) => [...teacherKeys.all, teacherId],
  me: () => [...teacherKeys.all, 'me'],
  detail: () => [...teacherKeys.me(), 'detail'],
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
