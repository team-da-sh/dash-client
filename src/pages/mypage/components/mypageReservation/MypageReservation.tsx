import { useState } from 'react';
import { useGetReservationStatus } from '@/pages/mypage/components/mypageReservation/apis/queries';
import ReservationList from '@/pages/mypage/components/mypageReservation/components/ReservationList';
import {
  options,
  STATUS_ENGLISH_MAP,
  STATUS_KOREAN_MAP,
} from '@/pages/mypage/components/mypageReservation/constants/statusMap';
import {
  containerStyle,
  layoutStyle,
  titleStyle,
} from '@/pages/mypage/components/mypageReservation/mypageReservation.css';
import type { ReservationStatus } from '@/pages/mypage/components/mypageReservation/types/reservationStatus';
import Dropdown from '@/common/components/Dropdown/Dropdown';
import Head from '@/shared/components/Head/Head';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const MyPageReservation = () => {
  const { data: reservationStatus } = useGetReservationStatus();

  const [selectedStatus, setSelectedStatus] = useState<ReservationStatus>(options[0]);

  const combineCountAndStatus = (status: ReservationStatus) => {
    const count = reservationStatus?.reservationStatusCounts.filter(
      (reservationStatus) => reservationStatus.status === status
    )[0].count;

    return `${STATUS_KOREAN_MAP[status]}(${count})`;
  };

  const statusOptions = options.map((option: ReservationStatus) => combineCountAndStatus(option));

  const handleSelectedOption = (countAndStatus: string) => {
    const status = countAndStatus.split('(')[0];

    setSelectedStatus(STATUS_ENGLISH_MAP[status]);
  };

  return (
    <div className={layoutStyle}>
      <div className={containerStyle}>
        <Head tag="h6_sb" color="black" className={titleStyle}>
          클래스 수강 목록
        </Head>

        <Dropdown
          selectedOption={combineCountAndStatus(selectedStatus)}
          options={statusOptions}
          handleSelectedOption={handleSelectedOption}
        />

        <section className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 })}>
          <ReservationList status={selectedStatus} />
        </section>
      </div>
    </div>
  );
};

export default MyPageReservation;
