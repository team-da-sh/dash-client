import { instance } from '@/shared/apis/instance';
import { API_URL } from '@/shared/constants/apiURL';

interface InstructorRegisterInfoTypes {
  imageUrls: string[];
  instagram: string | null;
  youtube: string | null;
  educations: string[];
  experiences: string[];
  detail: string;
  videoUrls: string[];
}

export const postInstructorRegisterInfo = async (infoData: InstructorRegisterInfoTypes) => {
  const response = await instance.post(API_URL.TEACHERS, infoData);

  return response;
};
