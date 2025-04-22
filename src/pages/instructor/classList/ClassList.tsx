import { useNavigate } from 'react-router-dom';
import { useGetMyLessons } from '@/pages/instructor/classList/apis/queries';
import * as styles from '@/pages/instructor/classList/classList.css';
import { handleBoxButtonClick, handleCancelClick, handleClassCardClick } from '@/pages/mypage/utils/clickUtils';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import ClassCard from '@/shared/components/ClassCard/ClassCard';
import Header from '@/shared/components/Header/Header';
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
      <Header.Root isColor={true}>
        <Header.BackIcon />
        <Header.Title title="내 클래스 목록" />
      </Header.Root>
      <main className={styles.containerStyle}>
        <Text tag="b2_m" color="gray9">
          전체 {lessonData?.count}
        </Text>
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
