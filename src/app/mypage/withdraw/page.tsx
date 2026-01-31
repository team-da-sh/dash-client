'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import CompleteStep from '@/app/mypage/withdraw/components/CompleteStep/CompleteStep';
import NoticeStep from '@/app/mypage/withdraw/components/NoticeStep/NoticeStep';
import ReasonStep from '@/app/mypage/withdraw/components/ReasonStep/ReasonStep';
import WithdrawHeader from '@/app/mypage/withdraw/components/WithdrawHeader/WithdrawHeader';
import type { WithdrawReasonTypes } from '@/app/mypage/withdraw/constants';
import { useFunnel } from '@/common/hooks/useFunnel';

export default function Page() {
  const router = useRouter();
  const { Funnel, Step, setStep } = useFunnel(3, ROUTES_CONFIG.home.path);
  const [email, setEmail] = useState('');
  const [selectedReasons, setSelectedReasons] = useState<WithdrawReasonTypes[]>([]);
  const [customReason, setCustomReason] = useState('');

  return (
    <Funnel>
      <Step name="1">
        <WithdrawHeader step={1} onBack={() => router.back()} />
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
        <CompleteStep email={email} onGoHome={() => router.push(ROUTES_CONFIG.home.path)} />
      </Step>
    </Funnel>
  );
}
