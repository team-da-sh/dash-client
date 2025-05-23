import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getMyPage, getMyLessons, getMyTeacherInfo, getMyLessonThumbnails } from '@/pages/mypage/apis/axios';
import type {
  MyPageResponseTypes,
  LessonCountResponseTypes,
  MyTeacherInfoResponseTypes,
  LessonThumbnailsResponseTypes,
} from '@/pages/mypage/types/api';
import { memberKeys, teacherKeys } from '@/shared/constants/queryKey';

export const useGetMyPage = (): UseQueryResult<MyPageResponseTypes, AxiosError> => {
  return useQuery<MyPageResponseTypes, AxiosError>({
    queryKey: memberKeys.me(),
    queryFn: getMyPage,
  });
};

export const useGetMyLessonCounts = (): UseQueryResult<LessonCountResponseTypes, AxiosError> => {
  return useQuery<LessonCountResponseTypes, AxiosError>({
    queryKey: memberKeys.statistics(),
    queryFn: getMyLessons,
  });
};

export const useGetMyTeacherInfo = (currentRole?: string): UseQueryResult<MyTeacherInfoResponseTypes, AxiosError> => {
  return useQuery<MyTeacherInfoResponseTypes, AxiosError>({
    queryKey: teacherKeys.me(),
    queryFn: getMyTeacherInfo,
    enabled: currentRole === 'TEACHER',
  });
};

export const useGetMyLessonThumbnails = (
  currentRole?: string
): UseQueryResult<LessonThumbnailsResponseTypes, AxiosError> => {
  return useQuery<LessonThumbnailsResponseTypes, AxiosError>({
    queryKey: memberKeys.thumbnails(),
    queryFn: getMyLessonThumbnails,
    enabled: currentRole === 'TEACHER',
  });
};
