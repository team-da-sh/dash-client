import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/apis/constants/queryKey';
import { getLocationList } from '../axios';

// TODO: keyword 필수인지 질문
export const useGetLocationList = (query: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.LOCATIONS, query],
    queryFn: async () => {
      return await getLocationList(query);
    },
  });
};
