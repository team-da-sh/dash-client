import BoxButton from '@/shared/components/BoxButton/BoxButton';

const SuccessStep = ({ onGoHome }: { onGoHome: () => void }) => {
  return (
    <>
      <div>SuccessStep</div>
      <BoxButton onClick={onGoHome}>신청내역 보기</BoxButton>
    </>
  );
};

export default SuccessStep;
