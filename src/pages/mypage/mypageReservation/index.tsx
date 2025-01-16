import { useNavigate } from 'react-router-dom';
import { layoutStyle, containerStyle } from '@/pages/mypage/mypageReservation/index.css';
import BoxButton from '@/components/BoxButton';
import ClassCard from '@/components/ClassCard';
import Flex from '@/components/Flex';
import Header from '@/components/Header';
import Text from '@/components/Text';
import { MOCK_RESERVATION_DATA } from '@/mocks/mockReservationData';
import { ReservationCardProps } from '@/types/reservationTypes';

const MyPageReservation = () => {
  const navigate = useNavigate();

  /* API 연결 작업 필요! 추후 수정.
    const { data, isLoading, isError } = 쿼리리

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (isError) {
    return <div>예약 내역 데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }
  */

  const handleDetailClick = (reservationId: number) => {
    navigate(`/mypage/reservation/${reservationId}`);
  };
  const totalReservation = MOCK_RESERVATION_DATA.reservations.length;

  return (
    <div className={layoutStyle}>
      <Header.Root isColor={true}>
        <Header.BackIcon />
        <Header.Title title="클래스 예약 내역" />
      </Header.Root>

      <div className={containerStyle}>
        <Text tag="b2" color="gray9">
          전체 {totalReservation}
        </Text>
        <Flex direction="column" gap="1.2rem" marginTop="1.6rem">
          {MOCK_RESERVATION_DATA.reservations.map((reservation: ReservationCardProps) => (
            <ClassCard key={reservation.reservationId} {...reservation}>
              <BoxButton variant="outline" isDisabled={true}>
                취소하기
              </BoxButton>
              <BoxButton variant="outline" onClick={() => handleDetailClick(reservation.reservationId)}>
                상세보기
              </BoxButton>
            </ClassCard>
          ))}
        </Flex>
      </div>
    </div>
  );
};

export default MyPageReservation;
