import { useMutation } from '@tanstack/react-query';
import queryClient from '@/queryClient';
import { postImage } from '../axios';

export const useImageMutation = () => {
  return useMutation({
    mutationFn: (fileData: FormData) => postImage(fileData),
    onSuccess: () => {
      queryClient.invalidateQueries({});
    },
  });
};
