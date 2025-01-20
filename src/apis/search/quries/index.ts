import { useQuery } from '@tanstack/react-query';
import { getDancerList } from '@/apis/search/axios';

export const useGetDancerList = (params: { sortOption: 'LATEST' | 'MOSTFAVORITE' | 'UPCOMING'; keyword?: string }) => {
  return useQuery({
    queryKey: ['dancerList', params],
    queryFn: () => getDancerList(params),
  });
};
