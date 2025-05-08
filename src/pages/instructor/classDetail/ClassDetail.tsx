import { useParams } from 'react-router-dom';
import { useGetLessonDetail } from '@/pages/instructor/classDetail/apis/queries';
import * as styles from '@/pages/instructor/classDetail/classDetail.css';
import StudentCard from '@/pages/instructor/classDetail/components/StudentCard/StudentCard';
import ClassCard from '@/shared/components/ClassCard/ClassCard';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const ClassDetail = () => {
  const { id } = useParams<{ id: string }>();

  const lessonId = Number(id);

  const { data: lessonData, isLoading, isError } = useGetLessonDetail(lessonId);

  if (isLoading) {
    return <></>;
  }

  if (isError) {
    return <></>;
  }

  return (
    <div className={styles.layoutStyle}>
      <div className={styles.containerStyle}>
        <Head level="h2" tag="h6_sb" color="black">
          클래스 정보
        </Head>
        <section className={sprinkles({ gap: 16 })}>
          {lessonData && (
            <ClassCard
              id={lessonData.id}
              name={lessonData.name}
              imageUrl={lessonData.imageUrl}
              genre={lessonData.genre}
              level={lessonData.level}
              location={lessonData.location}
              detailedAddress={lessonData.detailedAddress}
              startDateTime={lessonData.startDateTime}
              endDateTime={lessonData.endDateTime}
              isReservation={false}
              applyStatus={lessonData.applyStatus}
            />
          )}
        </section>

        <section className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 16 })}>
          <Text tag="b2_sb" color="gray9">
            신청한 수강생 ({lessonData?.studentCount ?? 0})
          </Text>
          <div className={styles.studentCardWrapperStyle}>
            {(lessonData?.students ?? [])
              .slice()
              .reverse()
              .map((students, index) => (
                <StudentCard key={index} students={students} index={index} />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClassDetail;
