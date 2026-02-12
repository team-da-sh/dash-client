import type { LessonStatus } from '@/app/my/(instructor)/manage-classes/types/lessonStatus';
import type { ReservationStatus } from '@/app/my/(student)/classes/types/reservationStatus';

export const API_URL = {
  AUTH_LOGIN: 'v1/auth/login',
  AUTH_REISSUE: 'v1/auth/reissue',
  AUTH_LOGOUT: 'v1/auth/logout',
  AUTH_PHONE_REQUEST: 'v1/auth/phone/request',
  AUTH_PHONE_VERIFY: 'v1/auth/phone/verify',

  MEMBERS_VALIDATE_WITHDRAW: 'v1/auth/validate-withdraw',
  MEMBERS_WITHDRAW: 'v1/auth/withdraw',
  MEMBERS_ONBOARD: 'v1/members/onboard',
  MEMBERS_ME: 'v1/members/me',
  MEMBERS_RESERVATIONS: (status: ReservationStatus) => {
    return status === 'ALL' ? 'v1/members/me/reservations' : `v1/members/me/reservations?status=${status}`;
  },
  MEMBERS_RESERVATIONS_CLASS_CARD: 'v1/members/me/reservations/{reservationId}/class-card',
  MEMBERS_RESERVATIONS_CANCEL: 'v1/members/me/reservations/{reservationId}/cancel',
  MEMBERS_RESERVATIONS_STATISTICS: 'v1/members/me/reservations/statistics',
  MEMBERS_RESERVATION_DETAIL: 'v1/members/me/reservations',

  TEACHERS: 'v1/teachers',
  TEACHER_DETAIL: 'v1/teachers',
  TEACHERS_ME: 'v1/teachers/me',
  TEACHERS_LESSONS_DETAIL: 'v1/teachers/me/lessons',
  TEACHERS_LESSONS: (status: LessonStatus) => {
    return status === 'ALL' ? 'v1/teachers/me/lessons' : `v1/teachers/me/lessons?status=${status}`;
  },
  TEACHER_DETAIL_INTRODUCTION: 'v1/teachers/me/detail',
  TEACHER_ME_THUMBNAILS: 'v1/teachers/me/lessons/thumbnails',
  TEACHER_ME_ACCOUNT: 'v1/teachers/me/account',
  TEACHERS_POPULAR: 'v1/teachers/popular',
  TEACHERS_SEARCH: 'v1/teachers?keyword=:keyword',
  TEACHERS_LESSON_STATUS: 'v1/teachers/me/lessons/status',
  TEACHERS_LESSON_CHANGE_APPROVE: (lessonId: number, reservationId: number) =>
    `v1/teachers/me/lessons/${lessonId}/${reservationId}/change-approve`,
  TEACHERS_LESSON_CHANGE_CANCEL: (lessonId: number, reservationId: number) =>
    `v1/teachers/me/lessons/${lessonId}/${reservationId}/change-cancel`,
  TEACHER_NICKNAME_VALIDATION: 'v1/teachers/nickname-validation',

  LESSONS: 'v1/lessons',
  LESSON_DETAIL: 'v1/lessons',
  LESSON_UPDATE: 'v1/lessons',
  LESSONS_LATEST: 'v1/lessons/latest',
  LESSONS_POPULAR_GENRES: 'v1/lessons/popular-genres',
  LESSONS_UPCOMING: 'v1/lessons/upcoming',
  LESSONS_FAVORITES: 'v1/lessons/favorites/{lessonId}',
  LESSON_RESERVE_PROGRESS: 'v1/lessons',
  LESSON_RESERVATION: 'v2/lessons',
  LESSON_RESERVATION_STATUS: 'v1/members/me/reservations/status',

  MY_PAGE_FAVORITES: 'v1/mypage/favorites',
  MY_PAGE_LESSONS: 'v1/mypage/lessons',
  MY_PAGE_LESSON_DETAIL: 'v1/mypage/lessons/{lessonId}',

  ADVERTISEMENTS: 'v1/advertisements',
  BANKS: 'v1/bank',

  SEARCH_LESSONS:
    'v1/lessons?genre=:genre&level=:level&startDate=:startDate&endDate=:endDate&sortOption=:sortOption&keyword=:keyword',

  LOCATIONS: 'v1/locations',

  AUTH_ROLE: 'v1/auth/role',
  IMAGES: 'v1/images',
};
