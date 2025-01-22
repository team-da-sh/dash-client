import { instance } from '@/apis/api';
import { API_URL } from '@/apis/constants/apiURL';
import { getAccessToken } from '@/utils/handleToken';

export const postImage = async (formData: FormData) => {
  const { data } = await instance.post(API_URL.IMAGES, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

export const postRole = async () => {
  const token = getAccessToken();

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
