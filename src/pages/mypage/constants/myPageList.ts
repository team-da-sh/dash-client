import { ROUTES_CONFIG } from '@/routes/routesConfig';
import SvgIcKakaoKakaobrown28 from '@/shared/assets/svg/IcKakaoKakaobrown28';

export const LIST_DATA = [
  { label: '자주 묻는 질문', id: 1, inActive: true },
  { label: '고객 센터', id: 2, hasDivider: true, inActive: true },
  { label: '로그아웃', id: 3 },
  { label: '회원', id: 4 },
];

export const MENU_LIST = [
  {
    icon: SvgIcKakaoKakaobrown28,
    label: '수강 목록',
    path: ROUTES_CONFIG.mypageReservation.path,
  },
  {
    icon: SvgIcKakaoKakaobrown28,
    label: '관심 목록',
    path: '/favorites',
  },
  {
    icon: SvgIcKakaoKakaobrown28,
    label: '최근 본',
    path: '/recent',
  },
  {
    icon: SvgIcKakaoKakaobrown28,
    label: '리뷰 작성',
    path: '/review',
  },
];
