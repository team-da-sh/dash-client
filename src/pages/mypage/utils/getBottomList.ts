import type { NavigateFunction } from 'react-router-dom';
import { GOOGLE_FORM_LINK } from '@/pages/mypage/constants/link';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { notify } from '@/shared/components/Toast/Toast';

export const getBottomList = (navigate: NavigateFunction, logout: () => void) => [
  {
    id: 1,
    label: '계좌 관리',
    inActive: true,
    onClick: () => navigate(ROUTES_CONFIG.accountRegister.path),
  },
  {
    id: 2,
    label: '자주 묻는 질문',
    inActive: false,
    onClick: () => notify({ message: '해당 기능은 추후 구현 예정이에요' }),
  },
  {
    id: 3,
    label: '고객 센터',
    inActive: true,
    hasDivider: true,
    onClick: () => window.open(GOOGLE_FORM_LINK, '_blank'),
  },
  {
    id: 4,
    label: '로그아웃',
    inActive: true,
    onClick: () => {
      logout();
      navigate(ROUTES_CONFIG.home.path);
    },
  },
  {
    id: 5,
    label: '회원 탈퇴',
    inActive: false,
    onClick: () => notify({ message: '해당 기능은 추후 구현 예정이에요' }),
  },
];
