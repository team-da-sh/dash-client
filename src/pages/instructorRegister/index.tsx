import BoxButton from '@/components/BoxButton';
import Header from '@/components/Header';
import ProgressBar from '@/components/ProgressBar';
import { useFunnel } from '@/hooks/useFunnel';
import ImageUploadStep from './ImageUploadStep';

const InstructorRegister = () => {
  const { Funnel, Step, currentStep, setStep } = useFunnel(6, '/mypage');

  return (
    <>
      <Header.Root isColor={true}>
        <Header.BackIcon />
        <Header.CloseIcon onClick={() => console.log('hi')} />
      </Header.Root>
      <ProgressBar totalStep={5} currentStep={currentStep} />

      <div>
        <Funnel>
          <Step name="1">
            <ImageUploadStep />
          </Step>
          <Step name="2">
            <ImageUploadStep />
          </Step>
        </Funnel>
      </div>

      <div>
        <BoxButton onClick={() => setStep(1)}>다음으로</BoxButton>
      </div>
    </>
  );
};

export default InstructorRegister;
