import { instance } from '@/apis/api';
import { API_URL } from '@/apis/constants/apiURL';

export const getAdvertisements = async () => {
  const { data } = await instance.get(API_URL.ADVERTISEMENTS);

  return data;
};

export const getMyPage = async () => {
  // TODO. 토큰 추후 변경하기
  // const token = localStorage.getItem('accessToken');
  const token = import.meta.env.VITE_ACCESS_TOKEN;

  const { data } = await instance.get(API_URL.MEMBERS_ME, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const getPopularGenres = async () => {
  const { data } = await instance.get(API_URL.LESSONS_POPULAR_GENRES);

  return data;
};
