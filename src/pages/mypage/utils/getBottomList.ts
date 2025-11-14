export interface BottomListItem {
  id: number;
  label: string;
  hasDivider?: boolean;
  type?: 'account' | 'faq' | 'center' | 'logout' | 'withdraw';
}

export const getBottomListData = (userRole: 'STUDENT' | 'TEACHER'): BottomListItem[] => {
  const baseList: BottomListItem[] = [
    { id: 2, label: '자주 묻는 질문', type: 'faq' },
    { id: 3, label: '고객 센터', hasDivider: true, type: 'center' },
    { id: 4, label: '로그아웃', type: 'logout' },
    { id: 5, label: '회원 탈퇴', type: 'withdraw' },
  ];

  if (userRole === 'TEACHER') {
    baseList.unshift({ id: 1, label: '계좌 관리', type: 'account' });
  }

  return baseList;
};
