import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as styles from '@/pages/mypage/components/mypageCancelClass/mypageCancelClass.css';
import { useFunnel } from '@/shared/hooks/useFunnel';
import type { Reservation } from '@/shared/types/reservationTypes';
import CancelImformationConfirm from './CancelImformationConfrim/CancelImformationConfirm';
import SelectDepositeStatus from './SelectDepositeStatus/SelectDepositeStatus';

const MypageCancelClass = () => {
  const location = useLocation();
  const [selectedStatus, setSelectedStatus] = useState<'before' | 'after' | null>(null);

  const reservationFromState = location.state?.reservation as Reservation | undefined;

  const reservationData: Reservation = reservationFromState || {
    id: 1,
    reservationId: 1,
    name: '기본 수업명',
    imageUrl: '/images/asset_my_empty.png',
    genre: '기본 장르',
    level: '초급',
    location: '기본 위치',
    startDateTime: '2024-01-01T10:00:00',
    endDateTime: '2024-01-01T11:00:00',
    dDay: 0,
    attendStatus: '예약됨',
  };

  const { Funnel, Step, setStep } = useFunnel(2, '/mypage', false);

  const handleNextClick = () => {
    setStep(1);
  };

  const handleDepositStatusChange = (status: 'before' | 'after') => {
    setSelectedStatus((prev) => (prev === status ? null : status));
  };

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
