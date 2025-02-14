import { useMutation, useQuery, UseQueryOptions } from '@tanstack/react-query';
import queryClient from '@/queryClient';
import { postImage, postRole } from '@/shared/apis/axios';
import { QUERY_KEYS } from '@/shared/constants/queryKey';
import { RoleApiResponse } from '@/shared/types/roleTypes';

export const useImageMutation = () => {
  return useMutation({
    mutationFn: (fileData: FormData) => postImage(fileData),
    onSuccess: () => {
      queryClient.invalidateQueries({});
    },
  });
};

export const useGetRole = (options?: Partial<UseQueryOptions<RoleApiResponse>>) => {
  return useQuery<RoleApiResponse>({
    queryKey: [QUERY_KEYS.AUTH_ROLE],
    queryFn: postRole,
    ...options,
  });
};
