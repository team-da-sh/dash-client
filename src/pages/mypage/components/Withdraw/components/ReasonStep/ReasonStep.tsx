import BoxButton from '@/shared/components/BoxButton/BoxButton';

interface ReasonStepPropTypes {
  onNext: () => void;
}

const ReasonStep = ({ onNext }: ReasonStepPropTypes) => {
  return (
    <>
      reasonStepPage
      <BoxButton onClick={onNext}>확인</BoxButton>
    </>
  );
};

export default ReasonStep;
