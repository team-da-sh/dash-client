import { useNavigate } from 'react-router-dom';
import { emptyTextStyle } from '@/pages/instructor/lessonList/lessonList.css';
import { useGetReservations } from '@/pages/mypage/components/mypageReservation/apis/queries';
import { type ReservationStatus } from '@/pages/mypage/components/mypageReservation/types/reservationStatus';
import { type Reservation } from '@/pages/mypage/components/mypageReservation/types/reservationTypes';
import { handleBoxButtonClick, handleCancelClick, handleClassCardClick } from '@/pages/mypage/utils/clickUtils';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import ClassCard from '@/shared/components/ClassCard';
import Text from '@/shared/components/Text/Text';
import { USER_ROLE } from '@/shared/constants/userRole';

interface ReservationListProps {
  status: ReservationStatus;
  targetReservationId?: number;
  showActions?: boolean;
}

const ReservationList = ({ status, targetReservationId, showActions = true }: ReservationListProps) => {
  const { data: reservationData } = useGetReservations(status);

  const navigate = useNavigate();

  // 특정 예약 ID가 제공된 경우 해당 예약만 필터링
  const filteredReservations = targetReservationId
    ? reservationData?.reservations.filter(
        (reservation: Reservation) => reservation.reservationId === targetReservationId
      )
    : reservationData?.reservations;

  if (!filteredReservations) return <></>;

  return (
    <>
      {filteredReservations?.length > 0 ? (
        filteredReservations?.map((reservation: Reservation) => (
          <ClassCard key={reservation.reservationId}>
            <ClassCard.Header
              role={USER_ROLE.MEMBER}
              status={reservation.reservationStatus}
              date={reservation.reservationDateTime}
            />
            <ClassCard.Body {...reservation} onClick={() => handleClassCardClick(navigate, reservation.lessonId)} />
            {showActions && (
              <ClassCard.Footer showAsk={true}>
                {(reservation.reservationStatus === 'PENDING_APPROVAL' ||
                  reservation.reservationStatus === 'APPROVED') && (
                  <BoxButton onClick={(e) => handleCancelClick(e, navigate, reservation)} variant="temp">
                    취소하기
                  </BoxButton>
                )}
                <BoxButton
                  variant="outline"
                  onClick={(e) => handleBoxButtonClick(e, navigate, reservation.reservationId, true)}>
                  상세보기
                </BoxButton>
              </ClassCard.Footer>
            )}
          </ClassCard>
        ))
      ) : (
        <Text tag="b1_sb" color="gray7" className={emptyTextStyle}>
          해당하는 클래스가 없어요.
        </Text>
      )}
    </>
  );
};

export default ReservationList;
