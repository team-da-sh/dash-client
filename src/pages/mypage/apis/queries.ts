import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getMyPage, getMyLessons, getMyTeacherInfo, getMyLessonThumbnails } from '@/pages/mypage/apis/axios';
import {
  MyPageResponseTypes,
  LessonCountResponseTypes,
  MyTeacherInfoResponseTypes,
  LessonThumbnailsResponseTypes,
} from '@/pages/mypage/types/api';
import { QUERY_KEYS } from '@/shared/constants/queryKey';
import { getUserRole } from '../utils/storage';

const userRole = getUserRole();

export const useGetMyPage = (): UseQueryResult<MyPageResponseTypes, AxiosError> => {
  return useQuery<MyPageResponseTypes, AxiosError>({
    queryKey: [QUERY_KEYS.MEMBERS_ME],
    queryFn: getMyPage,
  });
};

export const useGetMyLessonCounts = (): UseQueryResult<LessonCountResponseTypes, AxiosError> => {
  return useQuery<LessonCountResponseTypes, AxiosError>({
    queryKey: [QUERY_KEYS.MEMBERS_RESERVATION_STATISTICS],
    queryFn: getMyLessons,
  });
};

export const useGetMyTeacherInfo = (): UseQueryResult<MyTeacherInfoResponseTypes, AxiosError> => {
  return useQuery<MyTeacherInfoResponseTypes, AxiosError>({
    queryKey: [QUERY_KEYS.TEACHERS_ME],
    queryFn: getMyTeacherInfo,
    enabled: userRole === 'TEACHER',
  });
};

export const useGetMyLessonThumbnails = (): UseQueryResult<LessonThumbnailsResponseTypes, AxiosError> => {
  return useQuery<LessonThumbnailsResponseTypes, AxiosError>({
    queryKey: [QUERY_KEYS.MEMBERS_ME_THUMBNAILS],
    queryFn: getMyLessonThumbnails,
    enabled: userRole === 'TEACHER',
  });
};
