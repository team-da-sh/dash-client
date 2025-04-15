import type { ClassListParamsTypes, DancerListParamsTypes } from '@/pages/search/types/api';
import { instance } from '@/shared/apis/instance';

const SEARCH_URL = {
  GET_DANCERLIST: 'api/v1/teachers',
  GET_CLASSLIST: '/api/v1/lessons',
};

export const getDancerList = async ({ keyword }: DancerListParamsTypes) => {
  const { data } = await instance.get(SEARCH_URL.GET_DANCERLIST, {
    params: {
      keyword,
    },
  });

  return data;
};

export const getClassList = async ({ genre, level, startDate, endDate, sortOption, keyword }: ClassListParamsTypes) => {
  const { data } = await instance.get(SEARCH_URL.GET_CLASSLIST, {
    params: {
      genre,
      level,
      startDate,
      endDate,
      sortOption,
      keyword,
    },
  });

  return data;
};
