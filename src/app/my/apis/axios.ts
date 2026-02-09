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
  // Next BFF Route Handler (/api/auth/validate-withdraw)를 통해
  // 서버에서 탈퇴 가능 여부를 검증하고, 미들웨어가 읽을 수 있는 쿠키를 설정한다.
  const { data } = await instance.post('/auth/validate-withdraw');

  return data;
};
