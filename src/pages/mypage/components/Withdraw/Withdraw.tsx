import { useNavigate } from 'react-router-dom';
import CompleteStep from '@/pages/mypage/components/Withdraw/components/CompleteStep/CompleteStep';
import NoticeStep from '@/pages/mypage/components/Withdraw/components/NoticeStep/NoticeStep';
import ReasonStep from '@/pages/mypage/components/Withdraw/components/ReasonStep/ReasonStep';
import WithdrawHeader from '@/pages/mypage/components/Withdraw/components/WithdrawHeader/WithdrawHeader';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { useFunnel } from '@/shared/hooks/useFunnel';

const Withdraw = () => {
  const navigate = useNavigate();
  const { Funnel, Step, setStep } = useFunnel(3, ROUTES_CONFIG.home.path);

  return (
    <Funnel>
      <Step name="1">
        <WithdrawHeader step={1} />
        <ReasonStep onNext={() => setStep(1)} />
      </Step>

      <Step name="2">
        <WithdrawHeader step={2} />
        <NoticeStep onNext={() => setStep(1)} />
      </Step>

      <Step name="3">
        <WithdrawHeader step={3} />
        <CompleteStep onGoHome={() => navigate(ROUTES_CONFIG.home.path)} />
      </Step>
    </Funnel>
  );
};

export default Withdraw;
