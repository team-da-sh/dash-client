import { useMutation, useQuery } from '@tanstack/react-query';
import queryClient from '@/queryClient';
import { postImage, postRole } from '@/shared/apis/axios';
import { authKeys } from '@/shared/constants/queryKey';
import type { RoleNameResponseTypes } from '@/shared/types/myPageTypes';

export const useImageMutation = () => {
  return useMutation({
    mutationFn: (fileData: FormData) => postImage(fileData),
    onSuccess: () => {
      queryClient.invalidateQueries({});
    },
  });
};

export const useGetRole = () => {
  return useQuery<RoleNameResponseTypes>({
    queryKey: authKeys.role(),
    queryFn: postRole,
  });
};
