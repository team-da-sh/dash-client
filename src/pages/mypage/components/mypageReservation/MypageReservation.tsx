import { useNavigate } from 'react-router-dom';
import { useGetReservations } from '@/pages/mypage/components/mypageReservation/apis/queries';
import { containerStyle, layoutStyle } from '@/pages/mypage/components/mypageReservation/mypageReservation.css';
import { handleBoxButtonClick, handleCancelClick, handleClassCardClick } from '@/pages/mypage/utils/clickUtils';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import ClassCard from '@/shared/components/ClassCard/ClassCard';
import Flex from '@/shared/components/Flex/Flex';
import Text from '@/shared/components/Text/Text';
import type { Reservation } from '@/shared/types/reservationTypes';

const MyPageReservation = () => {
  const navigate = useNavigate();
  const { data: reservationData } = useGetReservations();

  return (
    <div className={layoutStyle}>
      <div className={containerStyle}>
        {reservationData && (
          <Text tag="b2_m" color="gray9">
            전체 {reservationData?.reservations.length}
          </Text>
        )}

        {reservationData?.reservations?.length && (
          <Flex direction="column" gap="1.2rem" marginTop="1.6rem">
            {reservationData.reservations.map((reservation: Reservation) => (
              <ClassCard
                key={reservation.reservationId}
                lessonName={reservation.name}
                lessonImageUrl={reservation.imageUrl}
                lessonGenre={reservation.genre}
                lessonLevel={reservation.level}
                lessonLocation={reservation.location}
                lessonStartDateTime={reservation.startDateTime}
                lessonEndDateTime={reservation.endDateTime}
                isReservation={true}
                onClick={() => handleClassCardClick(navigate, reservation.reservationId)}>
                <BoxButton onClick={handleCancelClick} variant="temp">
                  취소하기
                </BoxButton>

                <BoxButton
                  variant="outline"
                  onClick={(e) => handleBoxButtonClick(e, navigate, reservation.reservationId, true)}>
                  상세보기
                </BoxButton>
              </ClassCard>
            ))}
          </Flex>
        )}
      </div>
    </div>
  );
};

export default MyPageReservation;
