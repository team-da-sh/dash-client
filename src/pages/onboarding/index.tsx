import OnboardingFunnel from '@/pages/onboarding/components/OnboardingFunnel';
import { useFunnel } from '@/hooks/useFunnel';
import { ROUTES_CONFIG } from '@/routes/routesConfig';

const Onboarding = () => {
  const { Funnel, Step, setStep, currentStep } = useFunnel(5, ROUTES_CONFIG.home.path);

  return <OnboardingFunnel Funnel={Funnel} Step={Step} setStep={setStep} currentStep={currentStep} />;
};

export default Onboarding;
