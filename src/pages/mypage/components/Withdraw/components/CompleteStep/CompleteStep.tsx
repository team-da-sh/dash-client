import BoxButton from '@/shared/components/BoxButton/BoxButton';

interface CompleteStepPropTypes {
  onGoHome: () => void;
}

const CompleteStep = ({ onGoHome }: CompleteStepPropTypes) => {
  return (
    <>
      completeStepPage
      <BoxButton onClick={onGoHome}>확인</BoxButton>
    </>
  );
};

export default CompleteStep;
