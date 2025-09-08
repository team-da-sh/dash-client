import type { LessonStatus } from '@/pages/instructor/lessonList/types/lessonStatus';
import type { ReservationStatus } from '@/pages/mypage/components/mypageReservation/types/reservationStatus';

export const API_URL = {
  AUTH_LOGIN: '/api/v1/auth/login',
  AUTH_REISSUE: '/api/v1/auth/reissue',
  AUTH_LOGOUT: '/api/v1/auth/logout',
  AUTH_PHONE_REQUEST: '/api/v1/auth/phone/request',
  AUTH_PHONE_VERIFY: '/api/v1/auth/phone/verify',

  MEMBERS_WITHDRAW: '/api/v1/members/withdraw',
  MEMBERS_ONBOARD: '/api/v1/members/onboard',
  MEMBERS_ME: '/api/v1/members/me',
  MEMBERS_RESERVATIONS: (status: ReservationStatus) => {
    return status === 'ALL' ? '/api/v1/members/me/reservations' : `/api/v1/members/me/reservations?status=${status}`;
  },
  MEMBERS_RESERVATIONS_CLASS_CARD: '/api/v1/members/me/reservations/{reservationId}/class-card',
  MEMBERS_RESERVATIONS_CANCEL: '/api/v1/members/me/reservations/{reservationId}/cancel',
  MEMBERS_RESERVATIONS_STATISTICS: '/api/v1/members/me/reservations/statistics',
  MEMBERS_RESERVATION_DETAIL: '/api/v1/members/me/reservations',

  TEACHERS: '/api/v1/teachers',
  TEACHER_DETAIL: '/api/v1/teachers',
  TEACHERS_ME: '/api/v1/teachers/me',
  TEACHERS_LESSONS: (status: LessonStatus) => {
    return status === 'ALL' ? '/api/v1/teachers/me/lessons' : `/api/v1/teachers/me/lessons?status=${status}`;
  },
  TEACHER_DETAIL_INTRODUCTION: '/api/v1/teachers/me/detail',
  TEACHER_ME_THUMBNAILS: '/api/v1/teachers/me/lessons/thumbnails',
  TEACHER_ME_ACCOUNT: '/api/v1/teachers/me/account',
  TEACHERS_POPULAR: '/api/v1/teachers/popular',
  TEACHERS_SEARCH: '/api/v1/teachers?keyword=:keyword',
  TEACHERS_LESSON_STATUS: '/api/v1/teachers/me/lessons/status',
  TEACHER_NICKNAME_VALIDATION: '/api/v1/teachers/nickname-validation',

  LESSONS: '/api/v1/lessons',
  LESSON_DETAIL: '/api/v1/lessons',
  LESSONS_LATEST: '/api/v1/lessons/latest',
  LESSONS_POPULAR_GENRES: '/api/v1/lessons/popular-genres',
  LESSONS_UPCOMING: '/api/v1/lessons/upcoming',
  LESSONS_FAVORITES: '/api/v1/lessons/favorites/{lessonId}',
  LESSON_RESERVE_PROGRESS: '/api/v1/lessons',
  LESSON_RESERVATION: '/api/v1/lessons',
  LESSON_RESERVATION_STATUS: '/api/v1/members/me/reservations/status',

  MY_PAGE_FAVORITES: '/api/v1/mypage/favorites',
  MY_PAGE_LESSONS: '/api/v1/mypage/lessons',
  MY_PAGE_LESSON_DETAIL: '/api/v1/mypage/lessons/{lessonId}',

  ADVERTISEMENTS: '/api/v1/advertisements',
  BANKS: '/api/v1/bank',

  SEARCH_LESSONS:
    '/api/v1/lessons?genre=:genre&level=:level&startDate=:startDate&endDate=:endDate&sortOption=:sortOption&keyword=:keyword',

  LOCATIONS: '/api/v1/locations',

  AUTH_ROLE: '/api/v1/auth/role',
  IMAGES: '/api/v1/images',
};
