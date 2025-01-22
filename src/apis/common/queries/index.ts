import { useMutation, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { postImage, postRole } from '@/apis/common/axios';
import { QUERY_KEYS } from '@/apis/constants/queryKey';
import queryClient from '@/queryClient';
import { RoleType } from '@/types/roleTypes';

export const useImageMutation = () => {
  return useMutation({
    mutationFn: (fileData: FormData) => postImage(fileData),
    onSuccess: () => {
      queryClient.invalidateQueries({});
    },
  });
};

export const useGetRole = (options?: Partial<UseQueryOptions<RoleType>>) => {
  return useQuery<RoleType>({
    queryKey: [QUERY_KEYS.AUTH_ROLE],
    queryFn: postRole,
    ...options,
  });
};
