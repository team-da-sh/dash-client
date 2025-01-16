import FinishStep from '@/pages/login/components/FinishStep';
import GenreStep from '@/pages/login/components/GenreStep';
import InfoStep from '@/pages/login/components/InfoStep';
import LevelStep from '@/pages/login/components/LevelStep';
import LoginHeader from '@/pages/login/components/LoginHeader';
import ProfileStep from '@/pages/login/components/ProfileStep';
import { footerWrapperStyle, containerStyle, bodyWrapperStyle, progressBarStyle } from '@/pages/login/index.css';
import BoxButton from '@/components/BoxButton';
import ProgressBar from '@/components/ProgressBar';
import { useFunnel } from '@/hooks/useFunnel';
import { ROUTES_CONFIG } from '@/routes/routesConfig';

const Login = () => {
  const { Funnel, Step, setStep, currentStep } = useFunnel(5, ROUTES_CONFIG.home.path);

  const handleNextButtonClick = () => {
    setStep(1);
  };

  return (
    <div className={containerStyle}>
      <LoginHeader currentStep={currentStep} />
      {currentStep < 5 && <ProgressBar totalStep={4} currentStep={currentStep} className={progressBarStyle} />}

      <div className={bodyWrapperStyle}>
        <Funnel>
          <Step name="1">
            <InfoStep></InfoStep>
          </Step>
          <Step name="2">
            <GenreStep></GenreStep>
          </Step>
          <Step name="3">
            <LevelStep></LevelStep>
          </Step>
          <Step name="4">
            <ProfileStep></ProfileStep>
          </Step>
          <Step name="5">
            <FinishStep></FinishStep>
          </Step>
        </Funnel>
      </div>

      <div className={footerWrapperStyle}>
        <BoxButton variant="primary" onClick={handleNextButtonClick}>
          {currentStep === 5 ? '홈으로 이동' : '다음'}
        </BoxButton>
      </div>
    </div>
  );
};

export default Login;
