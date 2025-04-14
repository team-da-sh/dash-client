import type { UseQueryOptions } from '@tanstack/react-query';
import { useMutation, useQuery } from '@tanstack/react-query';
import queryClient from '@/queryClient';
import { postImage, postRole } from '@/shared/apis/axios';
import { QUERY_KEYS } from '@/shared/constants/queryKey';
import { RoleNameResponseTypes } from '@/shared/types/myPageTypes';

export const useImageMutation = () => {
  return useMutation({
    mutationFn: (fileData: FormData) => postImage(fileData),
    onSuccess: () => {
      queryClient.invalidateQueries({});
    },
  });
};

export const useGetRole = (options?: Partial<UseQueryOptions<RoleNameResponseTypes>>) => {
  return useQuery<RoleNameResponseTypes>({
    queryKey: [QUERY_KEYS.AUTH_ROLE],
    queryFn: postRole,
    ...options,
  });
};
