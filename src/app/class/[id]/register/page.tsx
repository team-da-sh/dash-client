'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import ConfirmationStep from '@/app/class/[id]/register/components/ConfirmationStep/ConfirmationStep';
import ReservationHeader from '@/app/class/[id]/register/components/ReservationHeader/ReservationHeader';
import ReservationStep from '@/app/class/[id]/register/components/ReservationStep/ReservationStep';
import SuccessStep from '@/app/class/[id]/register/components/SuccessStep/SuccessStep';
import type { ClassReservationResponseTypes } from '@/app/class/[id]/register/types';
import { useFunnel } from '@/common/hooks/useFunnel';

function ReservationContent() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const id = params.id;
  const { Funnel, Step, setStep } = useFunnel(3, '/');
  const [reservationDetail, setReservationDetail] = useState<ClassReservationResponseTypes | null>(null);

  const currentStep = searchParams?.get('step') || '1';

  // reservationDetail 없이 step 2, 3에 직접 접근한 경우 step 1로 리다이렉트
  useEffect(() => {
    if (!reservationDetail && currentStep !== '1') {
      router.replace(`/class/${id}/register`);
    }
  }, [reservationDetail, currentStep, router, id]);

  // 리다이렉트 중에는 아무것도 렌더링하지 않음
  if (!reservationDetail && currentStep !== '1') {
    return null;
  }

  return (
    <Funnel>
      <Step name="1">
        <ReservationHeader step={1} />
        <ReservationStep
          onNext={(detail) => {
            setReservationDetail(detail);
            setStep(1);
          }}
        />
      </Step>

      <Step name="2">
        <ReservationHeader step={2} />
        <ConfirmationStep onNext={() => setStep(1)} {...reservationDetail!} />
      </Step>

      <Step name="3">
        <ReservationHeader step={3} />
        <SuccessStep onGoHome={() => router.push('/my/reservations')} />
      </Step>
    </Funnel>
  );
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ReservationContent />
    </Suspense>
  );
}
