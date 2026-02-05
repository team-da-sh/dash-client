import { instance } from '@/shared/apis/instance';

export const postWithdraw = async () => {
  // Next BFF Route Handler (/api/auth/withdraw)를 통해
  // 서버에 탈퇴 요청을 전달하고, 완료 상태를 쿠키로 관리한다.
  const { data } = await instance.post('/auth/withdraw');

  return data;
};
