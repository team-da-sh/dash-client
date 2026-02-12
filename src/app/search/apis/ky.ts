import type {
  ClassListParamsTypes,
  ClassListResponseTypes,
  DancerListParamsTypes,
  DancerListResponseTypes,
} from '@/app/search/types/api';
import { kyInstance } from '@/shared/apis/kyInstance';
import { API_URL } from '@/shared/constants/apiURL';

export const getDancerList = async ({ keyword }: DancerListParamsTypes): Promise<DancerListResponseTypes> => {
  const data = await kyInstance
    .get(API_URL.TEACHER_DETAIL, {
      searchParams: keyword ? { keyword } : undefined,
    })
    .json<DancerListResponseTypes>();

  return data;
};

export const getClassList = async ({
  genre,
  level,
  startDate,
  endDate,
  sortOption,
  keyword,
}: ClassListParamsTypes): Promise<ClassListResponseTypes> => {
  const data = await kyInstance
    .get(API_URL.LESSONS, {
      searchParams: {
        genre,
        level,
        startDate,
        endDate,
        sortOption,
        keyword,
      },
    })
    .json<ClassListResponseTypes>();

  return data;
};
