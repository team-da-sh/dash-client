import { ROUTES_CONFIG } from '@/routes/routesConfig';

export const LIST_DATA = [
  { label: '내 정보 수정', id: 1 },
  { label: '강사 등록', id: 2, path: ROUTES_CONFIG.instructorRegister?.path },
  { label: '클래스 등록', id: 3, isInstructorRequired: true, path: ROUTES_CONFIG.classRegister?.path },
  {
    label: '클래스 관리',
    id: 4,
    isInstructorRequired: true,
    hasDivider: true,
    path: ROUTES_CONFIG.instructorClassList?.path,
  },
  { label: '자주 묻는 질문', id: 5 },
  { label: '고객 센터', id: 6, hasDivider: true },
  { label: '로그아웃', id: 7 },
];
