import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { getClassList, getDancerList } from '@/app/search/apis/ky';
import type { TAB_TYPES } from '@/app/search/constants';
import type { ClassListParamsTypes, ClassListResponseTypes, DancerListResponseTypes } from '@/app/search/types/api';
import { lessonKeys, teacherKeys } from '@/shared/constants/queryKey';
import type { ApiError } from '@/shared/types/ApiError';

export const useGetDancerList = (params: {
  keyword?: string;
  selectedTab?: TAB_TYPES;
}): UseQueryResult<DancerListResponseTypes, ApiError> => {
  return useQuery<DancerListResponseTypes, ApiError>({
    queryKey: teacherKeys.list._ctx.search(params).queryKey,
    queryFn: async () => {
      return await getDancerList(params);
    },
    placeholderData: (prev) => prev,
    enabled: params.selectedTab === 'dancer',
  });
};

export const useGetClassList = (
  params: ClassListParamsTypes & { selectedTab?: TAB_TYPES }
): UseQueryResult<ClassListResponseTypes, ApiError> => {
  return useQuery<ClassListResponseTypes, ApiError>({
    queryKey: lessonKeys.list._ctx.search(params).queryKey,
    queryFn: async () => {
      return await getClassList(params);
    },
    placeholderData: (prev) => prev,
    enabled: params.selectedTab === 'class',
  });
};
