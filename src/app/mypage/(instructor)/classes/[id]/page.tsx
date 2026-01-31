'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useId } from 'react';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { useGetLessonDetail } from '@/app/mypage/(instructor)/classes/[id]/apis/queries';
import InfoEditButton from '@/app/mypage/(instructor)/classes/[id]/components/InfoEditButton/InfoEditButton';
import StudentTab from '@/app/mypage/(instructor)/classes/[id]/components/StudentTab/StudentTab';
import {
  layoutStyle,
  containerStyle,
  classInfoSectionStyle,
  tabTitleStyle,
} from '@/app/mypage/(instructor)/classes/[id]/index.css';
import ClassInfo from '@/app/mypage/(student)/reservations/[id]/components/ClassInfo/ClassInfo';
import Head from '@/common/components/Head/Head';
import ClassCard from '@/shared/components/ClassCard';
import { USER_ROLE } from '@/shared/constants/userRole';

export default function Page() {
  const classInfoId = useId();
  const studentTabId = useId();

  const params = useParams() ?? {};
  const id = (params as { id?: string }).id;

  const { data: lessonData } = useGetLessonDetail(Number(id), 'APPROVE');

  return (
    <div className={layoutStyle}>
      <section className={containerStyle} aria-labelledby={classInfoId}>
        <Head level="h2" tag="h6_sb" color="black" id={classInfoId}>
          내 클래스 정보
        </Head>
        <div className={classInfoSectionStyle}>
          {lessonData && (
            <Link href={ROUTES_CONFIG.class.path(lessonData.id.toString())}>
              <ClassCard>
                <ClassCard.Header
                  role={USER_ROLE.TEACHER}
                  date={lessonData.startDateTime}
                  status={lessonData.applyStatus}
                />
                <ClassCard.Body
                  name={lessonData.name}
                  imageUrl={lessonData.imageUrl}
                  genre={lessonData.genre}
                  level={lessonData.level}
                />
                <ClassCard.Footer>
                  <ClassInfo
                    lessonRound={lessonData.rounds}
                    location={lessonData.location}
                    locationDetail={lessonData.detailedAddress}
                  />
                </ClassCard.Footer>
              </ClassCard>
            </Link>
          )}
          <InfoEditButton id={id ?? ''} startDateTime={lessonData?.startDateTime ?? ''} />
        </div>
      </section>

      <section aria-labelledby={studentTabId}>
        <Head level="h2" tag="h6_sb" color="black" id={studentTabId} className={tabTitleStyle}>
          수강생 관리
        </Head>

        <StudentTab lessonId={Number(id)} />
      </section>
    </div>
  );
}
