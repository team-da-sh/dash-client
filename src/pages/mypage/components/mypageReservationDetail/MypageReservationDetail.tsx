import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useGetReservationsDetail } from '@/pages/mypage/components/mypageReservationDetail/apis/queries';
import ApplicantInfo from '@/pages/mypage/components/mypageReservationDetail/components/ApplicantInfo/ApplicantInfo';
import ClassInfo from '@/pages/mypage/components/mypageReservationDetail/components/ClassInfo/ClassInfo';
import ReservationProgress from '@/pages/mypage/components/mypageReservationDetail/components/ReservationProgress/ReservationProgress';
import * as styles from '@/pages/mypage/components/mypageReservationDetail/mypageReservationDetail.css';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import ClassCard from '@/shared/components/ClassCard';
import Head from '@/shared/components/Head/Head';

const MyPageReservationDetail = () => {
  const { id: reservationId } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const { data } = useGetReservationsDetail(Number(reservationId));

  if (!data) {
    return <div>오류 data 없음 </div>;
  }

  const handleGoCancleClassPage = () => {
    // TODO: 취소 페이지 path 입력
    navigate(ROUTES_CONFIG.mypageCancelClass.path(reservationId ?? ''));
  };

  const handleGoAskPage = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open('https://forms.gle/JMYzQGxEdVHVogsE6', '_blank');
  };

  return (
    <div className={styles.layoutStyle}>
      <section>
        <Head level="h2" tag="h6_sb" className={styles.classInfoTitleStyle}>
          클래스 상세 정보
        </Head>

        <div className={styles.classInfoWrapper}>
          <ReservationProgress reservationStatus={data.reservationStatus} />
          <Link to={ROUTES_CONFIG.class.path(data.lessonId.toString())}>
            <ClassCard>
              <ClassCard.Body
                name={data.lessonName}
                level={data.level}
                genre={data.genre}
                imageUrl={data.lessonImageUrl}
              />
              <ClassCard.Footer>
                <ClassInfo lessonRound={data.rounds} location={data.location} locationDetail={data.detailedAddress} />
              </ClassCard.Footer>
            </ClassCard>
          </Link>
        </div>
      </section>

      <section className={styles.buttonWrapper}>
        {!(data.reservationStatus === 'CANCELLED' || data.reservationStatus === 'PENDING_CANCELLATION') && (
          <BoxButton variant="transparency" onClick={handleGoCancleClassPage}>
            취소하기
          </BoxButton>
        )}
        <BoxButton variant="transparency" onClick={handleGoAskPage}>
          문의하기
        </BoxButton>
      </section>

      <section className={styles.applicantWrapper}>
        <Head level="h2" tag="h6_sb">
          신청 정보
        </Head>

        <ApplicantInfo
          memberName={data.name}
          memberPhoneNumber={data.phoneNumber}
          reservationDateTime={data.reservationDateTime}
        />
      </section>
    </div>
  );
};

export default MyPageReservationDetail;
