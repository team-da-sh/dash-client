import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as styles from '@/pages/mypage/components/mypageCancelClass/mypageCancelClass.css';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import type { Reservation } from '@/shared/types/reservationTypes';
import SelectDepositeStatus from './SelectDepositeStatus/SelectDepositeStatus';

const MypageCancelClass = () => {
  const location = useLocation();
  const [selectedStatus, setSelectedStatus] = useState<'before' | 'after' | null>(null);

  const reservationFromState = location.state?.reservation as Reservation | undefined;

  const reservationData = reservationFromState;

  if (!reservationData) {
    return <div>로딩 중...</div>;
  }

  const handleNextClick = () => {
    // TODO: 취소 처리 로직 구현
    console.log('취소 처리');
  };

  const handleDepositStatusChange = (status: 'before' | 'after') => {
    setSelectedStatus((prev) => (prev === status ? null : status));
  };

  return (
    <div className={styles.layoutStyle}>
      <div className={styles.containerStyle}>
        <SelectDepositeStatus
          reservationData={reservationData}
          selectedStatus={selectedStatus}
          onDepositStatusChange={handleDepositStatusChange}
        />

        <BoxButton
          variant="primary"
          onClick={handleNextClick}
          isDisabled={selectedStatus === null}
          className={sprinkles({ width: '100%' })}>
          다음
        </BoxButton>
      </div>
    </div>
  );
};

export default MypageCancelClass;
