import { useQuery } from '@tanstack/react-query';
import { getDancerList } from '@/apis/search/axios';

export const useGetDancerList = (params: { keyword?: string }) => {
  return useQuery({
    queryKey: ['dancerList', params],
    queryFn: async () => {
      return await getDancerList(params);
    },
  });
};
