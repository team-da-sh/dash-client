import { useMutation } from '@tanstack/react-query';
import queryClient from '@/queryClient';
import { postImage } from '../axios';

export const useImageMutation = (fileData: FormData) => {
  return useMutation({
    mutationFn: () => postImage(fileData),
    onSuccess: () => {
      queryClient.invalidateQueries({});
    },
    onError: () => {
      console.error();
    },
  });
};
