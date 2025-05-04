import { useNavigate } from 'react-router-dom';
import { useGetMyLessons } from '@/pages/instructor/classList/apis/queries';
import * as styles from '@/pages/instructor/classList/classList.css';
import { handleBoxButtonClick, handleCancelClick, handleClassCardClick } from '@/pages/mypage/utils/clickUtils';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import ClassCard from '@/shared/components/ClassCard/ClassCard';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import type { Lesson } from '@/shared/types/lessonTypes';

const ClassList = () => {
  const navigate = useNavigate();

  const { data: lessonData, isError, isLoading } = useGetMyLessons();

  if (isLoading) {
    return <div></div>;
  }

  if (isError) {
    return <div></div>;
  }

  return (
    <div className={styles.layoutStyle}>
      <main className={styles.containerStyle}>
        <div className={sprinkles({ display: 'flex', alignItems: 'center', gap: 4 })}>
          <Head level="h2" tag="h6_sb" color="black">
            내 클래스 관리
          </Head>
          <Text tag="b2_m" color="gray9">
            ({lessonData?.count})
          </Text>
        </div>

        <section className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 })}>
          {lessonData?.lessons.map((lesson: Lesson) => (
            <ClassCard
              onClick={() => handleClassCardClick(navigate, lesson.id)}
              isReservation={false}
              key={lesson.id}
              {...lesson}>
              <BoxButton onClick={handleCancelClick} variant="temp">
                수정하기
              </BoxButton>
              <BoxButton variant="outline" onClick={(e) => handleBoxButtonClick(e, navigate, lesson.id, false)}>
                상세보기
              </BoxButton>
            </ClassCard>
          ))}
        </section>
      </main>
    </div>
  );
};

export default ClassList;
