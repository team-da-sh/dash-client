import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getClassList, getDancerList } from '@/pages/search/apis/axios';
import type { ClassListParamsTypes, ClassListResponseTypes, DancerListResponseTypes } from '@/pages/search/types/api';
import { lessonKeys, teacherKeys } from '@/shared/constants/queryKey';

export const useGetDancerList = (params: { keyword?: string }): UseQueryResult<DancerListResponseTypes, AxiosError> => {
  return useQuery<DancerListResponseTypes, AxiosError>({
    queryKey: teacherKeys.list._ctx.search(params).queryKey,
    queryFn: async () => {
      return await getDancerList(params);
    },
    placeholderData: (prev) => prev,
  });
};

export const useGetClassList = (params: ClassListParamsTypes): UseQueryResult<ClassListResponseTypes, AxiosError> => {
  return useQuery<ClassListResponseTypes, AxiosError>({
    queryKey: lessonKeys.list._ctx.search(params).queryKey,
    queryFn: async () => {
      return await getClassList(params);
    },
    placeholderData: (prev) => prev,
  });
};
