export const REASONS = [
  '원하는 강사/클래스를 찾지 못했어요',
  '수강생 모집이 잘 되지 않았어요',
  '더 이상 댄스 활동을 하지 않게 되었어요',
  '사용 방법이 불편해요',
  '다른 서비스/채널을 이용하게 되었어요',
  '필요한 기능이 없거나 부재해요',
  '개인 정보/보안 문제가 우려돼요',
  '기타',
] as const;

export type WithdrawReasonTypes = (typeof REASONS)[number];
