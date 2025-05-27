import { useNavigate } from 'react-router-dom';
import { useGetReservations } from '@/pages/mypage/components/mypageReservation/apis/queries';
import { containerStyle, layoutStyle } from '@/pages/mypage/components/mypageReservation/mypageReservation.css';
import { handleBoxButtonClick, handleCancelClick, handleClassCardClick } from '@/pages/mypage/utils/clickUtils';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import ClassCard from '@/shared/components/ClassCard/ClassCard';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import type { Reservation } from '@/shared/types/reservationTypes';

const MyPageReservation = () => {
  const navigate = useNavigate();
  const { data: reservationData } = useGetReservations();

  const reservations = reservationData?.reservations || [];
  const reservationCount = reservations.length;

  return (
    <div className={layoutStyle}>
      <div className={containerStyle}>
        <div className={sprinkles({ display: 'flex', alignItems: 'center', gap: 4 })}>
          <Head tag="h6_sb" color="black">
            클래스 신청 내역
          </Head>
          {reservationData && (
            <Text tag="b2_m" color="gray7">
              ({reservationCount})
            </Text>
          )}
        </div>

        {reservationCount > 0 && (
          <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 })}>
            {reservations.map((reservation: Reservation) => (
              <ClassCard
                key={reservation.reservationId}
                id={reservation.reservationId}
                name={reservation.name}
                imageUrl={reservation.imageUrl}
                genre={reservation.genre}
                level={reservation.level}
                location={reservation.location}
                detailedAddress={reservation.location}
                startDateTime={reservation.startDateTime}
                endDateTime={reservation.endDateTime}
                isReservation={true}
                applyStatus={reservation.attendStatus}
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
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPageReservation;
