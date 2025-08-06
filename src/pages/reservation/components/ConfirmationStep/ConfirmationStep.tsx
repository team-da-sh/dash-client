import BoxButton from '@/shared/components/BoxButton/BoxButton';

const ConfirmationStep = ({ onNext }: { onNext: () => void }) => {
  return (
    <>
      <div>ConfirmationStep</div>
      <BoxButton onClick={onNext}>결제하기</BoxButton>
    </>
  );
};

export default ConfirmationStep;
