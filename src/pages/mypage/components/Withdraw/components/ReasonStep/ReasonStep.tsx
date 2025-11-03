import IcCheckcircleGray0524 from '@/shared/assets/svg/IcCheckcircleGray0524';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import { vars } from '@/shared/styles/theme.css';

interface ReasonStepPropTypes {
  onNext: () => void;
}

const ReasonStep = ({ onNext }: ReasonStepPropTypes) => {
  return (
    <>
      reasonStepPage
      <IcCheckcircleGray0524 width={24} height={24} color={vars.colors.gray03} />
      <BoxButton onClick={onNext}>확인</BoxButton>
    </>
  );
};

export default ReasonStep;
