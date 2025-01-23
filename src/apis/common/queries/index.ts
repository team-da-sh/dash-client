import { useMutation, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { postImage, postRole } from '@/apis/common/axios';
import { QUERY_KEYS } from '@/apis/constants/queryKey';
import queryClient from '@/queryClient';
import { RoleApiResponse } from '@/types/roleTypes';

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
