import { useNavigate } from 'react-router-dom';
import { useGetReservations } from '@/pages/mypage/components/mypageReservation/apis/queries';
import { type ReservationStatus } from '@/pages/mypage/components/mypageReservation/types/reservationStatus';
import { type Reservation } from '@/pages/mypage/components/mypageReservation/types/reservationTypes';
import { handleBoxButtonClick, handleCancelClick, handleClassCardClick } from '@/pages/mypage/utils/clickUtils';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import ClassCard from '@/shared/components/ClassCard';

interface ReservationListProps {
  status: ReservationStatus;
}

const ReservationList = ({ status }: ReservationListProps) => {
  const { data: reservationData } = useGetReservations(status);

  const navigate = useNavigate();

  return (
    <>
      {reservationData?.reservations.map((reservation: Reservation) => (
        <ClassCard
          key={reservation.reservationId}
          onClick={() => handleClassCardClick(navigate, reservation.reservationId)}>
          <ClassCard.Header
            role="student"
            status={reservation.reservationStatus}
            date={reservation.reservationDateTime}
          />
          <ClassCard.Body {...reservation} />
          <ClassCard.Footer showAsk={true}>
            <BoxButton onClick={handleCancelClick} variant="temp">
              취소하기
            </BoxButton>
            <BoxButton
              variant="outline"
              onClick={(e) => handleBoxButtonClick(e, navigate, reservation.reservationId, true)}>
              상세보기
            </BoxButton>
          </ClassCard.Footer>
        </ClassCard>
      ))}
    </>
  );
};

export default ReservationList;
