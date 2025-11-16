import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CompleteStep from '@/pages/mypage/components/Withdraw/components/CompleteStep/CompleteStep';
import NoticeStep from '@/pages/mypage/components/Withdraw/components/NoticeStep/NoticeStep';
import ReasonStep from '@/pages/mypage/components/Withdraw/components/ReasonStep/ReasonStep';
import WithdrawHeader from '@/pages/mypage/components/Withdraw/components/WithdrawHeader/WithdrawHeader';
import type { WithdrawReasonTypes } from '@/pages/mypage/components/Withdraw/constants';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { useFunnel } from '@/shared/hooks/useFunnel';

const Withdraw = () => {
  const navigate = useNavigate();
  const { Funnel, Step, setStep } = useFunnel(3, ROUTES_CONFIG.home.path);
  const [email, setEmail] = useState('');
  const [selectedReasons, setSelectedReasons] = useState<WithdrawReasonTypes[]>([]);
  const [customReason, setCustomReason] = useState('');

  return (
    <Funnel>
      <Step name="1">
        <WithdrawHeader step={1} onBack={() => navigate(-1)} />
        <ReasonStep
          selectedReasons={selectedReasons}
          customReason={customReason}
          onChangeReasons={setSelectedReasons}
          onChangeCustomReason={setCustomReason}
          onNext={() => setStep(1)}
        />
      </Step>

      <Step name="2">
        <WithdrawHeader step={2} onBack={() => setStep(-1)} />
        <NoticeStep
          onNext={(data) => {
            setEmail(data.email);
            setStep(1);
          }}
        />
      </Step>

      <Step name="3">
        <WithdrawHeader step={3} />
        <CompleteStep email={email} onGoHome={() => navigate(ROUTES_CONFIG.home.path)} />
      </Step>
    </Funnel>
  );
};

export default Withdraw;
