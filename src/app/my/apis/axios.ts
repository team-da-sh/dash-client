import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

export const getMyPage = async () => {
  const { data } = await instance.get(API_URL.MEMBERS_ME);

  return data;
};

export const getMyLessons = async () => {
  const { data } = await instance.get(API_URL.MEMBERS_RESERVATIONS_STATISTICS);

  return data;
};

export const getMyTeacherInfo = async () => {
  const { data } = await instance.get(API_URL.TEACHERS_ME);

  return data;
};

export const getMyLessonThumbnails = async () => {
  const { data } = await instance.get(API_URL.TEACHER_ME_THUMBNAILS);

  return data;
};

export const postValidateWithdraw = async () => {
  const { data } = await instance.post(API_URL.MEMBERS_VALIDATE_WITHDRAW);

  return data;
};
