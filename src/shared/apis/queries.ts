import { useMutation, useQuery, UseQueryOptions } from '@tanstack/react-query';
import queryClient from '@/queryClient';
import { postImage, postRole } from '@/shared/apis/axios';
import { QUERY_KEYS } from '@/shared/constants/queryKey';
import { RoleResponse } from '@/shared/types/api';

export const useImageMutation = () => {
  return useMutation({
    mutationFn: (fileData: FormData) => postImage(fileData),
    onSuccess: () => {
      queryClient.invalidateQueries({});
    },
  });
};

export const useGetRole = (options?: Partial<UseQueryOptions<RoleResponse>>) => {
  return useQuery<RoleResponse>({
    queryKey: [QUERY_KEYS.AUTH_ROLE],
    queryFn: postRole,
    ...options,
  });
};
