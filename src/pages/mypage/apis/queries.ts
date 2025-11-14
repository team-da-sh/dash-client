import { useMutation, useQuery, type UseQueryResult } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import {
  getMyLessons,
  getMyLessonThumbnails,
  getMyPage,
  getMyTeacherInfo,
  postValidateWithdraw,
} from '@/pages/mypage/apis/axios';
import type {
  LessonCountResponseTypes,
  LessonThumbnailsResponseTypes,
  MyPageResponseTypes,
  MyTeacherInfoResponseTypes,
} from '@/pages/mypage/types/api';
import { memberKeys, teacherKeys } from '@/shared/constants/queryKey';

export const useGetMyPage = (): UseQueryResult<MyPageResponseTypes, AxiosError> => {
  return useQuery<MyPageResponseTypes, AxiosError>({
    queryKey: memberKeys.me.queryKey,
    queryFn: getMyPage,
  });
};

export const useGetMyLessonCounts = (): UseQueryResult<LessonCountResponseTypes, AxiosError> => {
  return useQuery<LessonCountResponseTypes, AxiosError>({
    queryKey: memberKeys.me._ctx.reservation._ctx.statistics.queryKey,
    queryFn: getMyLessons,
  });
};

export const useGetMyTeacherInfo = (currentRole?: string): UseQueryResult<MyTeacherInfoResponseTypes, AxiosError> => {
  return useQuery<MyTeacherInfoResponseTypes, AxiosError>({
    queryKey: teacherKeys.me.queryKey,
    queryFn: getMyTeacherInfo,
    enabled: currentRole === 'TEACHER',
  });
};

export const useGetMyLessonThumbnails = (
  currentRole?: string
): UseQueryResult<LessonThumbnailsResponseTypes, AxiosError> => {
  return useQuery<LessonThumbnailsResponseTypes, AxiosError>({
    queryKey: teacherKeys.me._ctx.lesson._ctx.thumbnails.queryKey,

    queryFn: getMyLessonThumbnails,
    enabled: currentRole === 'TEACHER',
  });
};

export const usePostValidateWithdraw = () => {
  return useMutation<{ valid: boolean }, AxiosError<{ message: string }>, void>({
    mutationFn: () => postValidateWithdraw(),
  });
};
