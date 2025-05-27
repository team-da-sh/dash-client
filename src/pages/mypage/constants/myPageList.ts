import { ROUTES_CONFIG } from '@/routes/routesConfig';
import IcList from '@/shared/assets/svg/IcList';
import IcRecent from '@/shared/assets/svg/IcRecent';
import IcReview from '@/shared/assets/svg/IcReview';
import IcWish from '@/shared/assets/svg/IcWish';

export const LIST_DATA = [
  { label: '자주 묻는 질문', id: 1, inActive: true },
  { label: '고객 센터', id: 2, hasDivider: true, isNavigate: true },
  { label: '로그아웃', id: 3 },
  { label: '회원 탈퇴', id: 4, inActive: true },
];

export const MENU_LIST = [
  {
    icon: IcList,
    label: '수강 목록',
    path: ROUTES_CONFIG.mypageReservation.path,
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
