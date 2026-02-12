import { useMutation } from '@tanstack/react-query';
import type { ApiError } from '@/shared/types/ApiError';
import { postWithdraw } from './ky';

export const usePostWithdraw = () => {
  return useMutation<{ email: string }, ApiError<{ message: string }>, void>({
    mutationFn: postWithdraw,
  });
};
