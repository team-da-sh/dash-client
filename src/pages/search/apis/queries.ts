import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { getClassList, getDancerList } from '@/pages/search/apis/axios';
import type { ClassListParamsTypes, ClassListResponseTypes, DancerListResponseTypes } from '@/pages/search/types/api';

export const useGetDancerList = (params: { keyword?: string }): UseQueryResult<DancerListResponseTypes, Error> => {
  return useQuery<DancerListResponseTypes, Error>({
    queryKey: ['dancerList', params],
    queryFn: async () => {
      return await getDancerList(params);
    },
    placeholderData: (prev) => prev,
  });
};

export const useGetClassList = (params: ClassListParamsTypes): UseQueryResult<ClassListResponseTypes, Error> => {
  return useQuery<ClassListResponseTypes, Error>({
    queryKey: ['classList', params],
    queryFn: async () => {
      return await getClassList(params);
    },
    placeholderData: (prev) => prev,
  });
};
