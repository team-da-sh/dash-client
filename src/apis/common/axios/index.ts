import { instance } from '@/apis/api';

export const postImage = async (fileData: FormData) => {
  const { data } = await instance.post('/api/v1/images', {
    image: fileData,
  });
  return data;
};
