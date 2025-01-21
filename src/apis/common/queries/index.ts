import { useMutation } from '@tanstack/react-query';
import { postImage } from '@/apis/common/axios';
import queryClient from '@/queryClient';

export const useImageMutation = () => {
  return useMutation({
    mutationFn: (fileData: FormData) => postImage(fileData),
    onSuccess: () => {
      queryClient.invalidateQueries({});
    },
  });
};
