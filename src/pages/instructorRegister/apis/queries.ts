import type { UseQueryResult } from '@tanstack/react-query';
import { useMutation, useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import {
  getInstructorRegisterInfo,
  patchInstructorRegisterInfo,
  postInstructorRegisterInfo,
} from '@/pages/instructorRegister/apis/axios';
import type {
  InstructorRegisterInfoResponseTypes,
  InstructorRegisterRequestTypes,
} from '@/pages/instructorRegister/types/api';
import { QUERY_KEYS } from '@/shared/constants/queryKey';
import { USER_ROLE } from '@/shared/constants/userRole';

export const usePostInstructor = () => {
  return useMutation({
    mutationFn: (infoData: InstructorRegisterRequestTypes) => postInstructorRegisterInfo(infoData),
  });
};

export const useGetInstructorRegisterInfo = (
  userRole: string
): UseQueryResult<InstructorRegisterInfoResponseTypes, AxiosError> => {
  return useQuery({
    queryKey: [QUERY_KEYS.TEACHER_DETAIL_INTRODUCTION],
    queryFn: () => getInstructorRegisterInfo(),
    enabled: userRole === USER_ROLE.TEACHER,
  });
};

export const usePatchInstructorRegisterInfo = () => {
  return useMutation({
    mutationFn: (infoData: InstructorRegisterRequestTypes) => patchInstructorRegisterInfo(infoData),
  });
};
