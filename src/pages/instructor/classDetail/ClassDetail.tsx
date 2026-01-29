import { useId } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetLessonDetail } from '@/pages/instructor/classDetail/apis/queries';
import {
  layoutStyle,
  containerStyle,
  classInfoSectionStyle,
  tabTitleStyle,
} from '@/pages/instructor/classDetail/classDetail.css';
import InfoEditButton from '@/pages/instructor/classDetail/components/InfoEditButton/InfoEditButton';
import StudentTab from '@/pages/instructor/classDetail/components/StudentTab/StudentTab';
import ClassInfo from '@/pages/mypage/components/mypageReservationDetail/components/ClassInfo/ClassInfo';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Head from '@/common/components/Head/Head';
import ClassCard from '@/shared/components/ClassCard';
import { USER_ROLE } from '@/shared/constants/userRole';

export type TabStatus = 'APPROVE' | 'CANCEL';

const ClassDetail = () => {
  const classInfoId = useId();
  const studentTabId = useId();

  const { id } = useParams<{ id: string }>();

  const { data: lessonData } = useGetLessonDetail(Number(id), 'APPROVE');

  return (
    <div className={layoutStyle}>
      <section className={containerStyle} aria-labelledby={classInfoId}>
        <Head level="h2" tag="h6_sb" color="black" id={classInfoId}>
          내 클래스 정보
        </Head>
        <div className={classInfoSectionStyle}>
          {lessonData && (
            <Link to={ROUTES_CONFIG.class.path(lessonData.id.toString())}>
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
};

export default ClassDetail;
