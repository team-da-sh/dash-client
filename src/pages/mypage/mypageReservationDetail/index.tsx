import { useParams } from 'react-router-dom';
import * as styles from '@/pages/mypage/mypageReservationDetail/index.css';
import ApplicantInfo from '@/pages/reservation/components/ApplicantInfo';
import ClassInfo from '@/pages/reservation/components/ClassInfo';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Header from '@/components/Header';
import Text from '@/components/Text';
import { useGetReservationsDetail } from '@/apis/myPageReservationDetail/queries';
import { getStatusMessage } from '@/utils/getStatusMessage';
import { formatDateTime, getClassStatus } from '@/utils/timeCalculate';

const ClassReservationDetail = () => {
  const { id } = useParams<{ id: string }>();

  const lessonId = Number(id);

  const { data: detailData } = useGetReservationsDetail(lessonId);

  // 클래스 상태 계산
  const lessonStartDateTime = detailData?.rounds[0].startDateTime;
  const lessonEndDateTime = detailData?.rounds[0].endDateTime;

  const { status } = getClassStatus(lessonStartDateTime, lessonEndDateTime);

  return (
    <div className={styles.layoutStyle}>
      <Header.Root isColor={true}>
        <Header.BackIcon />
        <Header.Title title="클래스 예약 내역" />
      </Header.Root>

      <div className={styles.containerStyle}>
        <Flex width="100%" justify="center">
          <Head tag="h5" color={status === 'completed' ? 'gray8' : 'black'}>
            {getStatusMessage(status, detailData?.dDay)}
          </Head>
        </Flex>
        <div className={styles.classHeaderStyle}>
          <Text tag="b4" color="gray9">
            클래스 정보
          </Text>
        </div>
        <ClassInfo
          name={detailData?.lessonName}
          location={detailData?.location}
          locationDetail={detailData?.detailedAddress}
          teacherNickname={detailData?.nickname}
          level={detailData?.level}
          lessonRound={detailData?.rounds}
        />
        <div className={styles.applicantHeaderStyle}>
          <Text tag="b4" color="gray9">
            신청자 정보
          </Text>
        </div>

        <ApplicantInfo bookerName={detailData?.name} bookerPhoneNumber={detailData?.phoneNumber} />

        <Flex marginTop="1.2rem" justify="flexEnd">
          <Text tag="c1" color="gray9">
            {formatDateTime(detailData?.reservationDateTime || '')} 신청 완료
          </Text>
        </Flex>
      </div>
    </div>
  );
};

export default ClassReservationDetail;
