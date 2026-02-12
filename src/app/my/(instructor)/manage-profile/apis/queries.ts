import type { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getInstructorRegisterInfo,
  getNicknameDuplicate,
  patchInstructorRegisterInfo,
  postInstructorRegisterInfo,
} from '@/app/my/(instructor)/manage-profile/apis/ky';
import type {
  InstructorRegisterInfoResponseTypes,
  InstructorRegisterRequestTypes,
  NicknameDuplicateResponseTypes,
} from '@/app/my/(instructor)/manage-profile/types/api';
import { teacherKeys } from '@/shared/constants/queryKey';
import { USER_ROLE } from '@/shared/constants/userRole';
import type { ApiError } from '@/shared/types/ApiError';

export const usePostInstructor = () => {
  return useMutation({
    mutationFn: (infoData: InstructorRegisterRequestTypes) => postInstructorRegisterInfo(infoData),
  });
};

export const useGetInstructorRegisterInfo = (
  userRole: string
): UseQueryResult<InstructorRegisterInfoResponseTypes, ApiError> => {
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

export const useGetNicknameDuplicate = (): UseMutationResult<NicknameDuplicateResponseTypes, ApiError, string> => {
  return useMutation({
    mutationFn: (nickname: string) => getNicknameDuplicate(nickname),
  });
};
