import { instance } from '@/apis/api';

const SEARCH_URL = {
  GET_DANCERLIST: 'api/v1/teachers',
};

interface DancerListParams {
  sortOption: 'LATEST' | 'MOSTFAVORITE' | 'UPCOMING';
  keyword?: string;
}

export const getDancerList = async ({ sortOption, keyword }: DancerListParams) => {
  const { data } = await instance.get(SEARCH_URL.GET_DANCERLIST, {
    params: {
      sortOption,
      keyword,
    },
  });

  return data;
};
