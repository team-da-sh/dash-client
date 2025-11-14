import { useMutation } from '@tanstack/react-query';
import type { ApiError } from '@/shared/types/ApiError';
import { postWithdraw } from './axios';

export const usePostWithdraw = () => {
  return useMutation({
    mutationFn: postWithdraw,
    onError: (error: ApiError) => {
      console.error(error.name, error.message);
    },
  });
};
