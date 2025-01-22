import { instance } from '@/apis/api';

export const postImage = async (formData: FormData) => {
  const { data } = await instance.post('/api/v1/images', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};
