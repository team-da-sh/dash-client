import OnboardingFunnel from '@/pages/onboarding/components/OnboardingFunnel/OnboardingFunnel';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { useFunnel } from '@/shared/hooks/useFunnel';

const Onboarding = () => {
  const { Funnel, Step, setStep, currentStep } = useFunnel(5, ROUTES_CONFIG.home.path);

  return <OnboardingFunnel Funnel={Funnel} Step={Step} setStep={setStep} currentStep={currentStep} />;
};

export default Onboarding;
