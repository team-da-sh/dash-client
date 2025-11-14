import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { postWithdraw } from './axios';

export const usePostWithdraw = () => {
  return useMutation<{ email: string }, AxiosError<{ message: string }>, void>({
    mutationFn: postWithdraw,
  });
};
