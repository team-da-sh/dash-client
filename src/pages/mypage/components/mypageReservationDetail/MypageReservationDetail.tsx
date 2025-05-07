import { useParams } from 'react-router-dom';
import { useGetReservationsDetail } from '@/pages/mypage/components/mypageReservationDetail/apis/queries';
import * as styles from '@/pages/mypage/components/mypageReservationDetail/mypageReservationDetail.css';
import ApplicantInfo from '@/pages/reservation/components/ApplicantInfo/ApplicantInfo';
import ClassInfo from '@/pages/reservation/components/ClassInfo/ClassInfo';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { getStatusMessage } from '@/shared/utils/getStatusMessage';
import { formatDateTime, getClassStatus } from '@/shared/utils/timeCalculate';

const MyPageReservationDetail = () => {
  const { id } = useParams<{ id: string }>();

  const lessonId = Number(id);

  const { data } = useGetReservationsDetail(lessonId);

  if (!data) {
    return <div>오류 data 없음 </div>;
  }

  const lessonStartDateTime = data.rounds[0]?.startDateTime;
  const lessonEndDateTime = data.rounds[0]?.endDateTime;

  const { status } = getClassStatus(lessonStartDateTime, lessonEndDateTime);

  return (
    <div className={styles.layoutStyle}>
      <div className={styles.containerStyle}>
        <div className={styles.wrapperStyle}>
          <Head tag="h6_sb" color={status === 'completed' ? 'gray8' : 'black'}>
            {getStatusMessage(status, data?.dDay)}
          </Head>
        </div>
        <div className={styles.classHeaderStyle}>
          <Text tag="b2_sb" color="gray9">
            클래스 정보
          </Text>
        </div>
        <ClassInfo
          name={data?.lessonName}
          location={data?.location}
          locationDetail={data?.detailedAddress}
          teacherNickname={data?.nickname}
          level={data?.level}
          lessonRound={data?.rounds}
        />
        <div className={styles.applicantHeaderStyle}>
          <Text tag="b2_sb" color="gray9">
            신청자 정보
          </Text>
        </div>

        <ApplicantInfo memberName={data?.name} memberPhoneNumber={data?.phoneNumber} />

        <div className={styles.applyDateStyle}>
          <Text tag="c1_r" color="gray9">
            {formatDateTime(data?.reservationDateTime || '')} 신청 완료
          </Text>
        </div>
      </div>
    </div>
  );
};

export default MyPageReservationDetail;
