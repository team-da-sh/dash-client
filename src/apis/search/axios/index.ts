import { instance } from '@/apis/api';

const SEARCH_URL = {
  GET_DANCERLIST: 'api/v1/teachers',
};

interface DancerListParams {
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
