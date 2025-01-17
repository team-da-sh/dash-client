import * as styles from '@/pages/mypage/mypageReservationDetail/index.css';
import { RESERVATION_DETAIL } from '@/pages/mypage/mypageReservationDetail/mocks/reservationDetail';
import Header from '@/components/Header';

const ClassReservationDetail = () => {
  return (
    <div className={styles.layoutStyle}>
      <Header.Root isColor={true}>
        <Header.BackIcon />
        <Header.Title title="클래스 예약 내역" />
      </Header.Root>
      <div className={styles.containerStyle}></div>
    </div>
  );
};

export default ClassReservationDetail;
