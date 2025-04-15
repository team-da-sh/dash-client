import { useMutation } from '@tanstack/react-query';
import { postInstructorRegisterInfo } from '@/pages/instructorRegister/apis/axios';
import type { InstructorRegisterRequestTypes } from '@/pages/instructorRegister/types/api';

export const usePostInstructor = () => {
  return useMutation({
    mutationFn: (infoData: InstructorRegisterRequestTypes) => postInstructorRegisterInfo(infoData),
  });
};
