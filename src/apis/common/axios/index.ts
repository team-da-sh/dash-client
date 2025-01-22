import { instance } from '@/apis/api';
import { API_URL } from '@/apis/constants/apiURL';

export const postImage = async (formData: FormData) => {
  const { data } = await instance.post(API_URL.IMAGES, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

export const postRole = async () => {
  // TODO. 토큰 추후 변경하기
  // const token = localStorage.getItem('accessToken');

  const token = import.meta.env.VITE_ACCESS_TOKEN;

  const { data } = await instance.post(
    API_URL.AUTH_ROLE,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};
