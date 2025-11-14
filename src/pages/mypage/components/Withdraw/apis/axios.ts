import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';
import { getRefreshToken } from '@/shared/utils/handleToken';

export const postWithdraw = async () => {
  const refreshToken = getRefreshToken();

  if (!refreshToken) {
    throw new Error('Refresh Token이 존재하지 않습니다.');
  }

  const { data } = await instance.post(
    API_URL.MEMBERS_WITHDRAW,
    {},
    { headers: { Authorization: `Bearer ${refreshToken}` } }
  );

  return data;
};
