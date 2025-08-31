import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as styles from '@/pages/mypage/components/mypageCancelClass/mypageCancelClass.css';
import { useGetReservationClassCard } from '@/pages/mypage/components/mypageReservation/apis/queries';
import { useFunnel } from '@/shared/hooks/useFunnel';
import CancelImformationConfirm from './CancelImformationConfrim/CancelImformationConfirm';
import SelectDepositeStatus from './SelectDepositeStatus/SelectDepositeStatus';

const MypageCancelClass = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedStatus, setSelectedStatus] = useState<'before' | 'after' | null>(null);
  const { Funnel, Step, setStep } = useFunnel(2, '/mypage', false);

  const reservationId = id ? Number(id) : 0;

  const { data: reservationData, isLoading, error } = useGetReservationClassCard(reservationId);

  const handleNextClick = () => {
    setStep(1);
  };

  const handleDepositStatusChange = (status: 'before' | 'after') => {
    setSelectedStatus((prev) => (prev === status ? null : status));
  };

  // TODO: 입금 전, 입금 후 선택에 따른 분기 처리

  if (!id || isNaN(reservationId)) {
    return <div>잘못된 예약 ID입니다.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>예약 정보를 불러오는 중 오류가 발생했습니다.</div>;
  }

  if (!reservationData) {
    return <div>예약 정보를 찾을 수 없습니다.</div>;
  }

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
