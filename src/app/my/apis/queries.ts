import { useMutation, useQuery, type UseQueryResult } from '@tanstack/react-query';
import {
  getMyLessons,
  getMyLessonThumbnails,
  getMyPage,
  getMyTeacherInfo,
  postValidateWithdraw,
} from '@/app/my/apis/ky';
import type {
  LessonCountResponseTypes,
  LessonThumbnailsResponseTypes,
  MyPageResponseTypes,
  MyTeacherInfoResponseTypes,
} from '@/app/my/types/api';
import { memberKeys, teacherKeys } from '@/shared/constants/queryKey';
import type { ApiError } from '@/shared/types/ApiError';

export const useGetMyPage = (): UseQueryResult<MyPageResponseTypes, ApiError> => {
  return useQuery<MyPageResponseTypes, ApiError>({
    queryKey: memberKeys.me.queryKey,
    queryFn: getMyPage,
  });
};

export const useGetMyLessonCounts = (): UseQueryResult<LessonCountResponseTypes, ApiError> => {
  return useQuery<LessonCountResponseTypes, ApiError>({
    queryKey: memberKeys.me._ctx.reservation._ctx.statistics.queryKey,
    queryFn: getMyLessons,
  });
};

export const useGetMyTeacherInfo = (currentRole?: string): UseQueryResult<MyTeacherInfoResponseTypes, ApiError> => {
  return useQuery<MyTeacherInfoResponseTypes, ApiError>({
    queryKey: teacherKeys.me.queryKey,
    queryFn: getMyTeacherInfo,
    enabled: currentRole === 'TEACHER',
  });
};

export const useGetMyLessonThumbnails = (
  currentRole?: string
): UseQueryResult<LessonThumbnailsResponseTypes, ApiError> => {
  return useQuery<LessonThumbnailsResponseTypes, ApiError>({
    queryKey: teacherKeys.me._ctx.lesson._ctx.thumbnails.queryKey,

    queryFn: getMyLessonThumbnails,
    enabled: currentRole === 'TEACHER',
  });
};

export const usePostValidateWithdraw = () => {
  return useMutation<{ valid: boolean }, ApiError<{ message: string }>, void>({
    mutationFn: () => postValidateWithdraw(),
  });
};
