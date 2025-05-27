import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getMyLessons, getMyLessonThumbnails, getMyPage, getMyTeacherInfo } from '@/pages/mypage/apis/axios';
import type {
  LessonCountResponseTypes,
  LessonThumbnailsResponseTypes,
  MyPageResponseTypes,
  MyTeacherInfoResponseTypes,
} from '@/pages/mypage/types/api';
import { QUERY_KEYS } from '@/shared/constants/queryKey';

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

export const useGetMyTeacherInfo = (currentRole?: string): UseQueryResult<MyTeacherInfoResponseTypes, AxiosError> => {
  return useQuery<MyTeacherInfoResponseTypes, AxiosError>({
    queryKey: [QUERY_KEYS.TEACHERS_ME],
    queryFn: getMyTeacherInfo,
    enabled: currentRole === 'TEACHER',
  });
};

export const useGetMyLessonThumbnails = (
  currentRole?: string
): UseQueryResult<LessonThumbnailsResponseTypes, AxiosError> => {
  return useQuery<LessonThumbnailsResponseTypes, AxiosError>({
    queryKey: [QUERY_KEYS.TEACHERS_ME_THUMBNAILS],
    queryFn: getMyLessonThumbnails,
    enabled: currentRole === 'TEACHER',
  });
};
