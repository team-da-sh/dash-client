import { useMutation, useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/shared/constants/queryKey';
import { getLocationList, postClassRegisterInfo } from './axios';

// TODO: keyword 필수인지 질문
export const useGetLocationList = (query: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.LOCATIONS, query],
    queryFn: async () => {
      if (!query.trim()) return null;
      return await getLocationList(query);
    },
    placeholderData: query.trim() ? (prev) => prev : undefined,
    retry: 0,
    enabled: !!query.trim(),
  });
};

interface ClassTimeTypes {
  startTime: string;
  endTime: string;
}

interface ClassRegisterInfoTypes {
  imageUrls: string[];
  name: string;
  detail: string;
  videoUrls: string[];
  maxReservationCount: number;
  genre: string;
  level: string;
  recommendation: string;
  price: number;
  location: string | null;
  streetAddress: string | null;
  oldStreetAddress: string | null;
  detailedAddress: string | null;
  times: ClassTimeTypes[];
}

export const usePostClassRegisterInfo = () => {
  return useMutation({
    mutationFn: (infoData: ClassRegisterInfoTypes) => postClassRegisterInfo(infoData),
  });
};
