import IcAssetTop1 from '@/shared/assets/svg/IcAssetTop1';
import IcAssetTop2 from '@/shared/assets/svg/IcAssetTop2';
import IcAssetTop3 from '@/shared/assets/svg/IcAssetTop3';
import { MyPageResponseTypes } from '@/shared/types/myPageTypes';

export const GENRE_ICONS = [
  <IcAssetTop1 width={44} height={44} />,
  <IcAssetTop2 width={44} height={44} />,
  <IcAssetTop3 width={44} height={44} />,
];

export const DEFAULT_USER_DATA: MyPageResponseTypes = {
  profileImageUrl: '/images/image_profile_basic.png',
  nickname: '',
  reservationCount: 0,
  favoriteCount: 0,
  lessonCount: null,
};
