import { useNavigate } from 'react-router-dom';
import { layoutStyle, containerStyle } from '@/pages/mypage/mypageReservation/index.css';
import BoxButton from '@/components/BoxButton';
import ClassCard from '@/components/ClassCard';
import Flex from '@/components/Flex';
import Header from '@/components/Header';
import Text from '@/components/Text';
import { notify } from '@/components/Toast';
import { useGetReservations } from '@/apis/myPageReservation/queries';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { Reservation } from '@/types/reservationTypes';

const MyPageReservation = () => {
  const navigate = useNavigate();

  const { data: reservationData } = useGetReservations();

  const handleDetailClick = (reservationId: number | undefined) => {
    if (reservationId !== undefined) {
      const path = ROUTES_CONFIG.mypageReservationDetail.path(reservationId.toString());
      navigate(path);
    } else {
      navigate(ROUTES_CONFIG.error.path);
    }
  };
  return (
    <div className={layoutStyle}>
      <Header.Root isColor={true}>
        <Header.BackIcon />
        <Header.Title title="클래스 예약 내역" />
      </Header.Root>

      <div className={containerStyle}>
        {reservationData && (
          <Text tag="b2" color="gray9">
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
                isReservation={true}>
                <BoxButton onClick={notify} variant="temp">
                  취소하기
                </BoxButton>

                <BoxButton variant="outline" onClick={() => handleDetailClick(reservation.reservationId)}>
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
