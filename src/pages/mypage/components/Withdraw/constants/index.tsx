import IcNumberOne from '@/shared/assets/svg/IcNumberOne';
import SvgIcNumberThree from '@/shared/assets/svg/IcNumberThree';
import IcNumberTwo from '@/shared/assets/svg/IcNumberTwo';

export const WITHDRAW_REASONS = [
  '원하는 강사/클래스를 찾지 못했어요',
  '수강생 모집이 잘 되지 않았어요',
  '더 이상 댄스 활동을 하지 않게 되었어요',
  '사용 방법이 불편해요',
  '다른 서비스/채널을 이용하게 되었어요',
  '필요한 기능이 없거나 부재해요',
  '개인 정보/보안 문제가 우려돼요',
  '기타',
] as const;

export type WithdrawReasonTypes = (typeof WITHDRAW_REASONS)[number];

export const NOTICE_CONTENTS = [
  {
    id: 'g1',
    type: 'group',
    icon: <IcNumberOne width={16} height={16} />,
    title: '탈퇴 시 정보 파기 및 연동 해제',
    sections: [
      {
        id: 'g1-s1',
        subtitle: '개인정보 삭제 안내',
        contents: [{ id: 'g1-s1-c1', text: '이메일, 전화번호, 이름 등 가입 시 제공된 모든 개인 식별 정보 파기' }],
      },
      {
        id: 'g1-s2',
        subtitle: '거래 기록 보존',
        contents: [{ id: 'g1-s2-c1', text: '카카오 로그인 연동이 해제되며, 본 서비스에 대한 접근 권한 소멸' }],
      },
      {
        id: 'g1-s3',
        subtitle: '기타 안내',
        contents: [
          { id: 'g1-s3-c1', text: '클래스 신청, 수강, 취소 내역 등 수강 기록 일체 삭제 (수강생 해당)' },
          {
            id: 'g1-s3-c2',
            text: '등록된 강사 프로필, 개설 클래스 내 일부 식별 정보 (댄서명, 강사 이미지, 클래스 이미지 등) 삭제 (강사 해당)',
          },
        ],
      },
    ],
  },
  {
    id: 't1',
    type: 'text',
    icon: <IcNumberTwo width={16} height={16} />,
    title: '서비스 노출 및 재가입 시 복구 정책',
    content:
      '탈퇴 완료 시점부터 회원의 모든 활동 기록 및 콘텐츠는 서비스 상에서 더 이상 노출되지 않습니다. 다만, 동일한 카카오 이메일로 재가입 시 탈퇴와 동시에 삭제된 활동 기록 및 콘텐츠는 복구되어 원상태로 제공됩니다.',
  },
  {
    id: 't2',
    type: 'text',
    icon: <SvgIcNumberThree width={16} height={16} />,
    title: '법적 의무 보존 및 익명 처리',
    content:
      '단, 전자상거래 등에서의 소비자 보호에 관한 법률 및 관련 법령에 의거하여 구매/거래 기록, 분쟁 해결 기록 등 일부 정보는 법이 정한 기간 (최대 5년) 동안 보존된 후 파기됩니다.',
  },
] as const;
