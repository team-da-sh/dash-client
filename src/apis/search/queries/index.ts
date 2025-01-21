import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getDancerList, getClassList } from '@/apis/search/axios';
import { ClassListParams } from '@/apis/search/axios';

export interface Dancer {
  id: number;
  nickname: string;
  profileImage: string;
  genres: string[];
}

export interface DancerListResponse {
  teachers: Dancer[];
}

export interface Class {
  id: number;
  name: string;
  genre: string;
  level: string;
  startDate: string;
  endDate: string;
  instructor: string;
}

export interface ClassListResponse {
  lessons: Class[];
}

export const useGetDancerList = (params: { keyword?: string }): UseQueryResult<DancerListResponse, Error> => {
  return useQuery<DancerListResponse, Error>({
    queryKey: ['dancerList', params],
    queryFn: async () => {
      return await getDancerList(params);
    },
  });
};

export const useGetClassList = (params: ClassListParams): UseQueryResult<ClassListResponse, Error> => {
  return useQuery<ClassListResponse, Error>({
    queryKey: ['classList', params],
    queryFn: async () => {
      return await getClassList(params);
    },
  });
};
