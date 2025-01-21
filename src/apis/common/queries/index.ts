import { useMutation } from '@tanstack/react-query';
import queryClient from '@/queryClient';
import { postImage } from '../axios';

export const useImageMutation = (fileData: File) => {
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
