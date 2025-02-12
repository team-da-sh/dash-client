import { useMutation } from '@tanstack/react-query';
import { postInstructorRegisterInfo } from '../axios';

interface InstructorRegisterInfoTypes {
  imageUrls: string[];
  instagram: string | null;
  youtube: string | null;
  educations: string[];
  experiences: string[];
  detail: string;
  videoUrls: string[];
}

export const usePostInstructor = () => {
  return useMutation({
    mutationFn: (infoData: InstructorRegisterInfoTypes) => postInstructorRegisterInfo(infoData),
  });
};
