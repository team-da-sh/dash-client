import ClassCard from '@/shared/components/ClassCard/ClassCard';
import Head from '@/shared/components/Head/Head';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import type { Reservation } from '@/shared/types/reservationTypes';
import DepositeButton from '../DepositeButton/DepositeButton';

interface SelectDepositeStatusProps {
  reservationData: Reservation;
  selectedStatus: 'before' | 'after' | null;
  onDepositStatusChange: (status: 'before' | 'after') => void;
}

const SelectDepositeStatus = ({
  reservationData,
  selectedStatus,
  onDepositStatusChange,
}: SelectDepositeStatusProps) => {
  return (
    <>
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
          onClick={() => onDepositStatusChange('before')}
        />
        <DepositeButton
          text="입금 후"
          isSelected={selectedStatus === 'after'}
          onClick={() => onDepositStatusChange('after')}
        />
      </div>
    </>
  );
};

export default SelectDepositeStatus;
