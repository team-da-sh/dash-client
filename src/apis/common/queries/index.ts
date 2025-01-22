import { useMutation, useQuery } from '@tanstack/react-query';
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

export const useGetRole = () => {
  return useQuery<RoleType>({
    queryKey: [QUERY_KEYS.AUTH_ROLE],
    queryFn: postRole,
  });
};
