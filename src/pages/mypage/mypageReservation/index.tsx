import * as React from 'react';
import { layoutStyle } from '@/pages/mypage/mypageReservation/index.css';
import BoxButton from '@/components/BoxButton';
import ClassCard from '@/components/ClassCard';
import Flex from '@/components/Flex';
import Header from '@/components/Header';
import Text from '@/components/Text';
import { mockReservationData } from '@/mocks/mockReservationData';
import { ReservationCardProps } from '@/types/reservationTypes';

const MyPageReservation = () => {
  const totalReservation = mockReservationData.reservations.length;

  return (
    <React.Fragment>
      <Header.Root isColor={true}>
        <Header.BackIcon />
        <Header.Title title="클래스 예약 내역" />
      </Header.Root>
      <div className={layoutStyle}>
        <Text tag="b2" color="gray9">
          전체 {totalReservation}
        </Text>
        <Flex direction="column" gap="1.2rem" marginTop="1.6rem">
          {mockReservationData.reservations.map((reservation: ReservationCardProps) => (
            <ClassCard key={reservation.reservationId} {...reservation}>
              <BoxButton variant="outline" isDisabled={true}>
                취소하기
              </BoxButton>
              <BoxButton variant="outline">상세보기</BoxButton>
            </ClassCard>
          ))}
        </Flex>
      </div>
    </React.Fragment>
  );
};

export default MyPageReservation;
