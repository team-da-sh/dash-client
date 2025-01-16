import * as React from 'react';
import { layoutStyle } from '@/pages/mypage/mypageReservation/index.css';
import Header from '@/components/Header';

const MyPageReservation = () => {
  return (
    <React.Fragment>
      <Header.Root isColor={true}>
        <Header.BackIcon />
        <Header.Title title="클래스 예약 내역" />
      </Header.Root>
      <div className={layoutStyle}></div>
    </React.Fragment>
  );
};

export default MyPageReservation;
