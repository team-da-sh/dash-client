import { MutationCache, QueryClient } from '@tanstack/react-query';
import { notify } from '@/common/components/Toast/Toast';
import { isApiError } from '@/shared/types/ApiError';

const DEFAULT_ERROR_MESSAGE = '요청에 실패했어요.';

const getErrorMessage = (error: unknown) => {
  if (isApiError(error)) return error.response?.data?.message;
  return undefined;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
      staleTime: 1000 * 60 * 1, // 1분 후 stale 상태로 처리
      refetchOnWindowFocus: false, // 브라우저 창이 다시 focus를 하면 refetch되는 옵션 off
    },
  },
  mutationCache: new MutationCache({
    onError(error, _, __, mutation) {
      const message = mutation.meta?.errorMessage || getErrorMessage(error) || DEFAULT_ERROR_MESSAGE;

      if (mutation.meta?.shouldShowToastMessage) {
        notify({ message: message, icon: 'fail' });
      }
    },
  }),
});

export default queryClient;
