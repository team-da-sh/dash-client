import { useQuery } from '@tanstack/react-query';
import {
  MyPageResponseTypes,
  LessonCountResponseTypes,
  MyTeacherInfoResponseTypes,
  LessonThumbnailsResponseTypes,
} from '@/pages/mypage/types/api';
import { QUERY_KEYS } from '@/shared/constants/queryKey';
import { getMyPage, getMyLessons, getMyTeacherInfo, getMyLessonThumbnails } from './axios';

export const useGetMyPage = () => {
  return useQuery<MyPageResponseTypes>({
    queryKey: [QUERY_KEYS.MEMBERS_ME],
    queryFn: getMyPage,
  });
};

export const useGetMyLessonCounts = () => {
  return useQuery<LessonCountResponseTypes>({
    queryKey: [QUERY_KEYS.MEMBERS_RESERVATION_STATISTICS],
    queryFn: getMyLessons,
  });
};

export const useGetMyTeacherInfo = () => {
  return useQuery<MyTeacherInfoResponseTypes>({
    queryKey: [QUERY_KEYS.TEACHERS_ME],
    queryFn: getMyTeacherInfo,
  });
};

export const useGetMyLessonThumbnails = () => {
  return useQuery<LessonThumbnailsResponseTypes>({
    queryKey: [QUERY_KEYS.MEMBERS_ME_THUMBNAILS],
    queryFn: getMyLessonThumbnails,
  });
};
