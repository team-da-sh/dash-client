import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getDancerList } from '@/apis/search/axios';

export interface Dancer {
  id: number;
  nickname: string;
  profileImage: string;
  genres: string[];
}

export interface DancerListResponse {
  teachers: Dancer[];
}

export const useGetDancerList = (params: { keyword?: string }): UseQueryResult<DancerListResponse, Error> => {
  return useQuery<DancerListResponse, Error>({
    queryKey: ['dancerList', params],
    queryFn: async () => {
      return await getDancerList(params);
    },
  });
};
