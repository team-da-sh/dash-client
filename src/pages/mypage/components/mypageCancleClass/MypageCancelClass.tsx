import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { containerStyle, layoutStyle } from '@/pages/mypage/components/mypageCancleClass/mypageCancelCalss.css';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import ClassCard from '@/shared/components/ClassCard/ClassCard';
import Head from '@/shared/components/Head/Head';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import type { Reservation } from '@/shared/types/reservationTypes';
import DepositeButton from './DepositeButton/DepositeButton';

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
    <div className={layoutStyle}>
      <div className={containerStyle}>
        <div className={sprinkles({ paddingBottom: 20 })}>
          <Head tag="h6_sb" color="black">
            클래스 취소하기
          </Head>
        </div>

        <div className={sprinkles({ marginBottom: 26 })}>
          <ClassCard
            id={reservationData.reservationId}
            name={reservationData.name}
            imageUrl={reservationData.imageUrl}
            genre={reservationData.genre}
            level={reservationData.level}
            location={reservationData.location}
            detailedAddress={reservationData.location}
            startDateTime={reservationData.startDateTime}
            endDateTime={reservationData.endDateTime}
            isReservation={true}
            applyStatus={reservationData.attendStatus}
            onClick={() => {}}
          />
        </div>

        <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 15, marginBottom: 136 })}>
          <DepositeButton
            text="입금 전"
            isSelected={selectedStatus === 'before'}
            onClick={() => handleDepositStatusChange('before')}
          />
          <DepositeButton
            text="입금 후"
            isSelected={selectedStatus === 'after'}
            onClick={() => handleDepositStatusChange('after')}
          />
        </div>

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
