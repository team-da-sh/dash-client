import type { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { useMutation, useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import {
  getInstructorRegisterInfo,
  getNicknameDuplicate,
  patchInstructorRegisterInfo,
  postInstructorRegisterInfo,
} from '@/pages/instructorRegister/apis/axios';
import type {
  InstructorRegisterInfoResponseTypes,
  InstructorRegisterRequestTypes,
  NicknameDuplicateResponseTypes,
} from '@/pages/instructorRegister/types/api';
import { teacherKeys } from '@/shared/constants/queryKey';
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
    queryKey: teacherKeys.me._ctx.detail.queryKey,
    queryFn: () => getInstructorRegisterInfo(),
    enabled: userRole === USER_ROLE.TEACHER,
  });
};

export const usePatchInstructorRegisterInfo = () => {
  return useMutation({
    mutationFn: (infoData: InstructorRegisterRequestTypes) => patchInstructorRegisterInfo(infoData),
  });
};

export const useGetNicknameDuplicate = (): UseMutationResult<NicknameDuplicateResponseTypes, AxiosError, string> => {
  return useMutation({
    mutationFn: (nickname: string) => getNicknameDuplicate(nickname),
  });
};
