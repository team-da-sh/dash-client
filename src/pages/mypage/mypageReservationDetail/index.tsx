import * as styles from '@/pages/mypage/mypageReservationDetail/index.css';
import { RESERVATION_DETAIL } from '@/pages/mypage/mypageReservationDetail/mocks/reservationDetail';
import ApplicantInfo from '@/pages/reservation/components/ApplicantInfo';
import ClassInfo from '@/pages/reservation/components/ClassInfo';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Header from '@/components/Header';
import Text from '@/components/Text';
import { getStatusMessage } from '@/utils/getStatusMessage';
import { formatDateTime, getClassStatus } from '@/utils/timeCalculate';

const ClassReservationDetail = () => {
  // 클래스 상태 계산
  const lessonStartDateTime = RESERVATION_DETAIL[0].lessonRound[0].lessonStartDateTime;
  const lessonEndDateTime = RESERVATION_DETAIL[0].lessonRound[0].lessonEndDateTime;

  const { status, remainingDays } = getClassStatus(lessonStartDateTime, lessonEndDateTime);

  // 클래스 정보, 예약자 정보를 위함 data
  const data = RESERVATION_DETAIL[0];

  const reservationTime = data.reservationDateTime;

  return (
    <div className={styles.layoutStyle}>
      <Header.Root isColor={true}>
        <Header.BackIcon />
        <Header.Title title="클래스 예약 내역" />
      </Header.Root>

      <div className={styles.containerStyle}>
        <Flex width="100%" justify="center">
          <Head tag="h5" color={status === 'completed' ? 'gray8' : 'black'}>
            {getStatusMessage(status, remainingDays)}
          </Head>
        </Flex>
        <div className={styles.classHeaderStyle}>
          <Text tag="b4" color="gray9">
            클래스 정보
          </Text>
        </div>
        <ClassInfo
          lessonName={data.lessonName}
          lessonLocation={data.lessonLocation}
          teacherName={data.teacherNickname}
          lessonLevel={data.lessonLevel}
          lessonRound={data.lessonRound}
        />
        <div className={styles.applicantHeaderStyle}>
          <Text tag="b4" color="gray9">
            신청자 정보
          </Text>
        </div>

        <ApplicantInfo bookerName={data.bookerName} bookerPhoneNumber={data.bookerPhoneNumber} />

        <Flex marginTop="1.2rem" justify="flexEnd">
          <Text tag="c1" color="gray9">
            {formatDateTime(reservationTime)} 신청 완료
          </Text>
        </Flex>
      </div>
    </div>
  );
};

export default ClassReservationDetail;
