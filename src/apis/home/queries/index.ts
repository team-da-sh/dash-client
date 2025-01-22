import { useQuery } from '@tanstack/react-query';
import { getAdvertisements, getMyPage } from '@/apis/home/axios';
import { MyPageProps } from '@/types/myPageTypes';

export const useAdvertisements = () => {
  return useQuery({
    queryKey: ['advertisements'],
    queryFn: () => getAdvertisements(),
  });
};

// 마이페이지 조회
export const useGetMyPage = () => {
  return useQuery<MyPageProps>({
    queryKey: ['mypage'],
    queryFn: getMyPage,
  });
};
