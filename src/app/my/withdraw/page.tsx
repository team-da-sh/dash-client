'use client';

import { useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';
import CompleteStep from '@/app/my/withdraw/components/CompleteStep/CompleteStep';
import NoticeStep from '@/app/my/withdraw/components/NoticeStep/NoticeStep';
import ReasonStep from '@/app/my/withdraw/components/ReasonStep/ReasonStep';
import WithdrawHeader from '@/app/my/withdraw/components/WithdrawHeader/WithdrawHeader';
import type { WithdrawReasonTypes } from '@/app/my/withdraw/constants';
import { useFunnel } from '@/common/hooks/useFunnel';

function WithdrawContent() {
  const router = useRouter();
  const { Funnel, Step, setStep } = useFunnel(3, '/');
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
        <CompleteStep email={email} onGoHome={() => router.push('/')} />
      </Step>
    </Funnel>
  );
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <WithdrawContent />
    </Suspense>
  );
}
