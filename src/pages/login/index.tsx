import InfoStep from '@/pages/login/components/InfoStep';
import LoginHeader from '@/pages/login/components/LoginHeader';
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
      <LoginHeader />
      {currentStep < 5 && <ProgressBar totalStep={4} currentStep={1} className={progressBarStyle} />}

      <div className={bodyWrapperStyle}>
        <Funnel>
          <Step name="1">
            <InfoStep></InfoStep>
          </Step>
          <Step name="2">
            <></>
          </Step>
          <Step name="3">
            <></>
          </Step>
          <Step name="4">
            <></>
          </Step>
          <Step name="5">
            <></>
          </Step>
        </Funnel>
      </div>

      <div className={footerWrapperStyle}>
        <BoxButton variant="primary" onClick={handleNextButtonClick}>
          다음
        </BoxButton>
      </div>
    </div>
  );
};

export default Login;
