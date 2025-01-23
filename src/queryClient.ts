import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 1, // 1분 후 stale 상태로 처리
      refetchOnWindowFocus: false, // 브라우저 창이 다시 focus를 하면 refetch되는 옵션 off
    },
  },
});
export default queryClient;
