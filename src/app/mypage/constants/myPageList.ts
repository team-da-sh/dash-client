import IcList from '@/shared/assets/svg/IcList';
import IcRecent from '@/shared/assets/svg/IcRecent';
import IcReview from '@/shared/assets/svg/IcReview';
import IcWish from '@/shared/assets/svg/IcWish';

export const MENU_LIST = [
  {
    icon: IcList,
    label: '수강 목록',
    path: '/mypage/reservations',
  },
  {
    icon: IcWish,
    label: '관심 목록',
    inActive: true,
  },
  {
    icon: IcRecent,
    label: '최근 본',
    inActive: true,
  },
  {
    icon: IcReview,
    label: '리뷰 작성',
    inActive: true,
  },
];
