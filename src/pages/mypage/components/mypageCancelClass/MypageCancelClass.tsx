import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Error from '@/pages/error/Error';
import DepositeButton from '@/pages/mypage/components/mypageCancelClass/DepositeButton/DepositeButton';
import * as styles from '@/pages/mypage/components/mypageCancelClass/mypageCancelClass.css';
import { useGetReservationClassCard } from '@/pages/mypage/components/mypageReservation/apis/queries';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import ClassCard from '@/shared/components/ClassCard/ClassCard';
import Head from '@/shared/components/Head/Head';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const MypageCancelClass = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [selectedStatus, setSelectedStatus] = useState<'before' | 'after' | null>(null);

  const reservationId = id ? Number(id) : 0;
  const { data: reservationData } = useGetReservationClassCard(reservationId);

  const handleDepositStatusChange = (status: 'before' | 'after') => {
    setSelectedStatus((prev) => (prev === status ? null : status));
  };

  const handleNext = () => {
    if (selectedStatus) {
      navigate(ROUTES_CONFIG.mypageCancelConfirm.path(id!));
    }
  };

  if (!id || isNaN(reservationId)) {
    return <Error />;
  }

  if (!reservationData) {
    return <Error />;
  }

  return (
    <div className={styles.layoutStyle}>
      <div className={styles.containerStyle}>
        <div
          className={sprinkles({
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between',
          })}>
          <div>
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
                reservationDateTime={reservationData.reservationDateTime}
                onClick={() => {}}
              />
            </div>

            <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 15, marginBottom: 20 })}>
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
          </div>

          <BoxButton
            variant="primary"
            onClick={handleNext}
            isDisabled={selectedStatus === null}
            className={sprinkles({ width: '100%' })}>
            다음
          </BoxButton>
        </div>
      </div>
    </div>
  );
};

export default MypageCancelClass;
