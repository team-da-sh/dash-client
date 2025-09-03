import { useParams } from 'react-router-dom';
import { useGetLessonDetail } from '@/pages/instructor/classDetail/apis/queries';
import * as styles from '@/pages/instructor/classDetail/classDetail.css';
import StudentCard from '@/pages/instructor/classDetail/components/StudentCard/StudentCard';
import ClassCard from '@/shared/components/ClassCard';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { USER_ROLE } from '@/shared/constants/userRole';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const ClassDetail = () => {
  const { id } = useParams<{ id: string }>();

  const lessonId = Number(id);

  const { data: lessonData } = useGetLessonDetail(lessonId);

  return (
    <div className={styles.layoutStyle}>
      <div className={styles.containerStyle}>
        <Head level="h2" tag="h6_sb" color="black">
          내 클래스 정보
        </Head>
        <section className={sprinkles({ gap: 16 })}>
          {lessonData && (
            <ClassCard>
              <ClassCard.Header
                role={USER_ROLE.TEACHER}
                date={lessonData.startDateTime}
                status={lessonData.applyStatus}
              />
              <ClassCard.Body {...lessonData} />
              <ClassCard.Footer>{'장소'}</ClassCard.Footer>
            </ClassCard>
          )}
        </section>

        <section className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 16 })}>
          <Text tag="b2_sb" color="gray9">
            신청한 수강생 ({lessonData?.studentCount ?? 0})
          </Text>
          <div className={styles.studentCardWrapperStyle}>
            <StudentCard
              key={1}
              studentData={{
                name: '김규홍',
                phoneNumber: '010-7630-0607',
                createdAt: '2018.08.01. 22:59:58',
                reservationStatus: 'PENDING_CANCELLATION',
              }}
              index={0}
            />
            {(lessonData?.students ?? [])
              .slice()
              .reverse()
              .map((students, index) => (
                <StudentCard key={index} studentData={students} index={index} />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClassDetail;
