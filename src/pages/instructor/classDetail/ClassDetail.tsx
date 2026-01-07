import { useId } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetLessonDetail } from '@/pages/instructor/classDetail/apis/queries';
import * as styles from '@/pages/instructor/classDetail/classDetail.css';
import InfoEditButton from '@/pages/instructor/classDetail/components/InfoEditButton/InfoEditButton';
import StudentTab from '@/pages/instructor/classDetail/components/StudentTab/StudentTab';
import ClassInfo from '@/pages/mypage/components/mypageReservationDetail/components/ClassInfo/ClassInfo';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import ClassCard from '@/shared/components/ClassCard';
import Head from '@/shared/components/Head/Head';
import { USER_ROLE } from '@/shared/constants/userRole';
import { sprinkles } from '@/shared/styles/sprinkles.css';

export type TabStatus = 'APPROVE' | 'CANCEL';

const ClassDetail = () => {
  const classInfoId = useId();
  const studentTabId = useId();

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { data: lessonData } = useGetLessonDetail(Number(id), 'APPROVE');

  return (
    <div className={styles.layoutStyle}>
      <section className={styles.containerStyle} aria-labelledby={classInfoId}>
        <Head level="h2" tag="h6_sb" color="black" id={classInfoId}>
          내 클래스 정보
        </Head>
        <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 8 })}>
          {lessonData && (
            <div
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  navigate(ROUTES_CONFIG.class.path(lessonData.id.toString()));
                }
              }}
              onClick={() => {
                navigate(ROUTES_CONFIG.class.path(lessonData.id.toString()));
              }}>
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
            </div>
          )}
          <InfoEditButton id={id ?? ''} startDateTime={lessonData?.startDateTime ?? ''} />
        </div>
      </section>

      <section aria-labelledby={studentTabId}>
        <Head level="h2" tag="h6_sb" color="black" id={studentTabId} className={styles.tabTitleStyle}>
          수강생 관리
        </Head>
        <StudentTab lessonId={Number(id)} />
      </section>
    </div>
  );
};

export default ClassDetail;
