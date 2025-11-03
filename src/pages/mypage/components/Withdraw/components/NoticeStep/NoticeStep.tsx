import BoxButton from '@/shared/components/BoxButton/BoxButton';

interface NoticeStepPropTypes {
  onNext: () => void;
}

const NoticeStep = ({ onNext }: NoticeStepPropTypes) => {
  return (
    <>
      noticeStepPage
      <BoxButton onClick={onNext}>확인</BoxButton>
    </>
  );
};

export default NoticeStep;
