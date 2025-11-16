import { useMutation, useQuery } from '@tanstack/react-query';
import { locationKeys } from '@/shared/constants/queryKey';
import { getLocationList, patchClassInfo, postClassRegisterInfo } from './axios';

// TODO: keyword 필수인지 질문
export const useGetLocationList = (query: string) => {
  return useQuery({
    queryKey: locationKeys.search(query).queryKey,
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
    meta: { shouldShowToastMessage: true, errorMessage: '등록 권한이 없어요.' },
  });
};

export const usePatchClassInfo = () => {
  return useMutation({
    mutationFn: ({ lessonId, infoData }: { lessonId: number; infoData: ClassRegisterInfoTypes }) =>
      patchClassInfo(lessonId, infoData),
    meta: { shouldShowToastMessage: true, errorMessage: '수정 권한이 없어요.' },
  });
};
