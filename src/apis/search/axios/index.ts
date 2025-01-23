import { instance } from '@/apis/api';

const SEARCH_URL = {
  GET_DANCERLIST: 'api/v1/teachers',
  GET_CLASSLIST: '/api/v1/lessons',
};

export interface DancerListParams {
  keyword?: string;
}

export interface ClassListParams {
  genre?: string;
  level?: string;
  startDate?: string;
  endDate?: string;
  sortOption?: string;
  keyword?: string;
}

export const getDancerList = async ({ keyword }: DancerListParams) => {
  const { data } = await instance.get(SEARCH_URL.GET_DANCERLIST, {
    params: {
      keyword,
    },
  });

  return data;
};

export const getClassList = async ({ genre, level, startDate, endDate, sortOption, keyword }: ClassListParams) => {
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
