'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { useGetReservationsDetail } from '@/app/mypage/(student)/reservations/[id]/apis/queries';
import ApplicantInfo from '@/app/mypage/(student)/reservations/[id]/components/ApplicantInfo/ApplicantInfo';
import ClassInfo from '@/app/mypage/(student)/reservations/[id]/components/ClassInfo/ClassInfo';
import ReservationProgress from '@/app/mypage/(student)/reservations/[id]/components/ReservationProgress/ReservationProgress';
import * as styles from '@/app/mypage/(student)/reservations/[id]/index.css';
import BoxButton from '@/common/components/BoxButton/BoxButton';
import Head from '@/common/components/Head/Head';
import ClassCard from '@/shared/components/ClassCard';

export default function Page() {
  const params = useParams() ?? {};
  const reservationId = (params as { id?: string }).id;
  const router = useRouter();

  const { data } = useGetReservationsDetail(Number(reservationId));

  if (!data) {
    return <div>오류 data 없음 </div>;
  }

  const handleGoCancleClassPage = () => {
    router.push(ROUTES_CONFIG.mypageCancelClass.path(reservationId ?? ''));
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
          <Link href={ROUTES_CONFIG.class.path(data.lessonId.toString())}>
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
}
