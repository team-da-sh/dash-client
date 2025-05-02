import { ROUTES_CONFIG } from '@/routes/routesConfig';
import SvgIcList from '@/assets/svg/IcList';
import SvgIcRecent from '@/assets/svg/IcRecent';
import SvgIcReview from '@/assets/svg/IcReview';
import SvgIcWish from '@/assets/svg/IcWish';

export const LIST_DATA = [
  { label: '자주 묻는 질문', id: 1, inActive: true },
  { label: '고객 센터', id: 2, hasDivider: true, inActive: true },
  { label: '로그아웃', id: 3 },
  { label: '회원 탈퇴', id: 4 },
];

export const MENU_LIST = [
  {
    icon: SvgIcList,
    label: '수강 목록',
    path: ROUTES_CONFIG.mypageReservation.path,
  },
  {
    icon: SvgIcWish,
    label: '관심 목록',
    path: '/favorites',
  },
  {
    icon: SvgIcRecent,
    label: '최근 본',
    path: '/recent',
  },
  {
    icon: SvgIcReview,
    label: '리뷰 작성',
    path: '/review',
  },
];
