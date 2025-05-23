export const QUERY_KEYS = {
  AUTH_REISSUE: 'auth_reissue',

  MEMBERS_ME: 'members_me',
  MEMBERS_ME_THUMBNAILS: 'members_me_thumbnails',
  MEMBERS_RESERVATIONS: 'members_reservations',
  MEMBERS_RESERVATION_DETAIL: 'members_reservation_detail',
  MEMBERS_RESERVATION_STATISTICS: 'members_reservation_statistics',

  TEACHERS: 'teachers',
  TEACHERS_ME: 'teachers_me',
  TEACHER_DETAIL: 'teacher_detail',
  TEACHER_DETAIL_INTRODUCTION: 'teacher_detail_introduction',
  TEACHERS_SEARCH: 'teachers_search',

  LESSONS: 'lessons',
  LESSON_DETAIL: 'lesson_detail',
  LESSONS_LATEST: 'lessons_latest',
  LESSONS_POPULAR_GENRES: 'lessons_popular_genres',
  LESSONS_UPCOMING: 'lessons_upcoming',
  LESSONS_FAVORITES: 'lessons_favorites',
  LESSON_RESERVE_PROGRESS: 'lesson_reserve_progress',
  LESSON_RESERVATION: 'lesson_reservation',

  MY_PAGE_FAVORITES: 'my_page_favorites',
  MY_PAGE_LESSONS: 'my_page_lessons',
  MY_PAGE_LESSON_DETAIL: 'my_page_lesson_detail',

  ADVERTISEMENTS: 'advertisements',

  SEARCH_LESSONS: 'search_lessons',

  LOCATIONS: 'locations',

  AUTH_ROLE: 'auth_role',

  // IMAGES: 'images',
};

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
  reserve_progress: (lessonId: number) => [...lessonKeys.detail(lessonId), 'reserve-progress'],
  latest: () => [...lessonKeys.all, 'latest'],
  popular_genre: () => [...lessonKeys.all, 'popular'],
  upcoming: () => [...lessonKeys.all, 'upcoming'],
};

export const memberKeys = {
  all: ['members'] as const,
  me: () => [memberKeys.all, 'me'],
  lessons: () => [...memberKeys.me(), 'lessons'],
  thumbnails: () => [...memberKeys.lessons(), 'thumbnails'],
  reservations: () => [...memberKeys.me(), 'reservations'],
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
