import { instance } from '@/apis/api';

export const postInstructorRegisterInfo = async (infoData: any) => {
  const response = await instance.post('/api/v1/teachers', infoData);

  return response;
};
