import { ROUTES_CONFIG } from '@/routes/routesConfig';
import SvgIcKakaoKakaobrown28 from '@/shared/assets/svg/IcKakaoKakaobrown28';

export const LIST_DATA = [
  { label: '내 정보 수정', id: 1, inActive: true },
  { label: '강사 등록', id: 2, path: ROUTES_CONFIG.instructorRegister?.path },
  { label: '클래스 등록', id: 3, isInstructorRequired: true, path: ROUTES_CONFIG.classRegister?.path },
  {
    label: '클래스 관리',
    id: 4,
    isInstructorRequired: true,
    hasDivider: true,
    path: ROUTES_CONFIG.instructorClassList?.path,
  },
  { label: '자주 묻는 질문', id: 5, inActive: true },
  { label: '고객 센터', id: 6, hasDivider: true, inActive: true },
  { label: '로그아웃', id: 7 },
];

export const MENU_LIST = [
  {
    icon: SvgIcKakaoKakaobrown28,
    label: '수강 목록',
    path: '/courses',
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
