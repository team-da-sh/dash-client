import { MutationCache, QueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { notify } from '@/shared/components/Toast/Toast';

const DEFAULT_ERROR_MESSAGE = '요청에 실패했어요.';

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
      const message =
        mutation.meta?.errorMessage || (isAxiosError(error) && error.response?.data?.message) || DEFAULT_ERROR_MESSAGE;

      if (mutation.meta?.shouldShowToastMessage) {
        notify({ message: message, icon: 'fail' });
      }
    },
  }),
});

export default queryClient;
