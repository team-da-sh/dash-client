import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Error from '@/pages/error/Error';
import * as styles from '@/pages/mypage/components/mypageCancelClass/mypageCancelClass.css';
import { useFunnel } from '@/shared/hooks/useFunnel';
import type { Reservation } from '@/shared/types/reservationTypes';
import CancelImformationConfirm from './CancelImformationConfrim/CancelImformationConfirm';
import SelectDepositeStatus from './SelectDepositeStatus/SelectDepositeStatus';

const MypageCancelClass = () => {
  const location = useLocation();
  const [selectedStatus, setSelectedStatus] = useState<'before' | 'after' | null>(null);
  const { Funnel, Step, setStep } = useFunnel(2, '/mypage', false);

  const reservationFromState = location.state?.reservation as Reservation | undefined;

  if (!reservationFromState) {
    return <Error />;
  }

  const reservationData = reservationFromState;

  const handleNextClick = () => {
    setStep(1);
  };

  const handleDepositStatusChange = (status: 'before' | 'after') => {
    setSelectedStatus((prev) => (prev === status ? null : status));
  };

  // TODO: 입금 전, 입금 후 선택에 따른 분기 처리

  return (
    <div className={styles.layoutStyle}>
      <div className={styles.containerStyle}>
        <Funnel>
          <Step name="1">
            <SelectDepositeStatus
              reservationData={reservationData}
              selectedStatus={selectedStatus}
              onDepositStatusChange={handleDepositStatusChange}
              onNext={handleNextClick}
            />
          </Step>

          <Step name="2">
            <CancelImformationConfirm />
          </Step>
        </Funnel>
      </div>
    </div>
  );
};

export default MypageCancelClass;
