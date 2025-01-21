import { instance } from '@/apis/api';

const INSTRUCTOR_REGISTER_URL = '/api/v1/teachers';

interface InstructorRegisterInfoTypes {
  imageUrls: string[];
  instagram: string;
  youtube: string;
  educations: string[];
  experiences: string[];
  detail: string;
  videoUrls: string[];
}

export const postInstructorRegisterInfo = async (infoData: InstructorRegisterInfoTypes) => {
  const response = await instance.post(INSTRUCTOR_REGISTER_URL, infoData);

  return response;
};
