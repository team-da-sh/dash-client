import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetReservations, useGetReservationStatus } from '@/pages/mypage/components/mypageReservation/apis/queries';
import {
  containerStyle,
  layoutStyle,
  titleStyle,
} from '@/pages/mypage/components/mypageReservation/mypageReservation.css';
import { handleBoxButtonClick, handleCancelClick, handleClassCardClick } from '@/pages/mypage/utils/clickUtils';
import Dropdown from '@/common/components/Dropdown';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import ClassCard from '@/shared/components/ClassCard/ClassCard';
import Head from '@/shared/components/Head/Head';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import type { Reservation } from '@/shared/types/reservationTypes';

const options = ['전체(20)', '승인대기(10)', '승인완료(8)', '수강완료(6)'];

const MyPageReservation = () => {
  const navigate = useNavigate();
  const { data: reservationData } = useGetReservations();
  const { data: reservationStatus } = useGetReservationStatus();

  const reservations = reservationData?.reservations || [];
  const reservationCount = reservations.length;
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectedOption = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className={layoutStyle}>
      <div className={containerStyle}>
        <Head tag="h6_sb" color="black" className={titleStyle}>
          클래스 수강 목록
        </Head>

        <Dropdown selectedOption={selectedOption} options={options} handleSelectedOption={handleSelectedOption} />

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
