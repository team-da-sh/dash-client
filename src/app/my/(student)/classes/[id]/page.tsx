'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useGetReservationsDetail } from '@/app/my/(student)/classes/[id]/apis/queries';
import ApplicantInfo from '@/app/my/(student)/classes/[id]/components/ApplicantInfo/ApplicantInfo';
import ClassInfo from '@/app/my/(student)/classes/[id]/components/ClassInfo/ClassInfo';
import ReservationProgress from '@/app/my/(student)/classes/[id]/components/ReservationProgress/ReservationProgress';
import * as styles from '@/app/my/(student)/classes/[id]/index.css';
import { STATUS_KOREAN_MAP } from '@/app/my/(student)/classes/constants/statusMap';
import BoxButton from '@/common/components/BoxButton/BoxButton';
import Head from '@/common/components/Head/Head';
import { useEventLogger } from '@/lib/analytics';
import type { ReservationStatus } from '@/lib/analytics/events';
import ClassCard from '@/shared/components/ClassCard';

export default function Page() {
  const params = useParams<{ id: string }>();
  const reservationId = params?.id;
  const router = useRouter();

  const { logPageViewEvent } = useEventLogger();
  const { data } = useGetReservationsDetail(Number(reservationId));

  useEffect(() => {
    if (!data || !(data.reservationStatus in STATUS_KOREAN_MAP)) return;
    logPageViewEvent('reservation_detail_view', {
      lesson_id: data.lessonId,
      reservation_status: STATUS_KOREAN_MAP[
        data.reservationStatus as keyof typeof STATUS_KOREAN_MAP
      ] as ReservationStatus,
    });
  }, [data]);

  if (!data) {
    return <div>오류 data 없음 </div>;
  }

  const handleGoCancleClassPage = () => {
    router.push(`/my/classes/${reservationId ?? ''}/cancel`);
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
          <Link href={`/class/${data.lessonId}`}>
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
