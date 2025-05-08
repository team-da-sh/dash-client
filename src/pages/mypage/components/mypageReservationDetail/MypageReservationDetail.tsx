import { useParams } from 'react-router-dom';
import { useGetReservationsDetail } from '@/pages/mypage/components/mypageReservationDetail/apis/queries';
import * as styles from '@/pages/mypage/components/mypageReservationDetail/mypageReservationDetail.css';
import DetailTabWrapper from '@/pages/mypage/mypageReservationDetail/components/DetailTabWrapper.tsx/DetailTabWrapper';
import Head from '@/shared/components/Head/Head';

const MyPageReservationDetail = () => {
  const { id } = useParams<{ id: string }>();

  const lessonId = Number(id);

  const { data } = useGetReservationsDetail(lessonId);

  if (!data) {
    return <div>오류 data 없음 </div>;
  }

  return (
    <div className={styles.layoutStyle}>
      <div className={styles.containerStyle}>
        <div className={styles.mainTextStyle}>
          <Head level="h2" tag="h6_sb">
            클래스 신청 내역
          </Head>
        </div>
        <DetailTabWrapper />
        {/*  결제 프로세스에 따라 바뀔 수 있는 부분
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
        </div> */}
      </div>
    </div>
  );
};

export default MyPageReservationDetail;
