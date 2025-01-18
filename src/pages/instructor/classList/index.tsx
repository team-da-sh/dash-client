import { useNavigate } from 'react-router-dom';
import * as styles from '@/pages/instructor/classList/index.css';
import BoxButton from '@/components/BoxButton';
import ClassCard from '@/components/ClassCard';
import Flex from '@/components/Flex';
import Header from '@/components/Header';
import Text from '@/components/Text';
import { MOCK_MYLESSON_DATA } from '@/mocks/mockMyLessonData';
import { LessonCardProps } from '@/types/lessonTypes';

const ClassList = () => {
  const navigate = useNavigate();

  const totalLessons = MOCK_MYLESSON_DATA.lessons.length;

  const handleDetailClick = (lessonId: number) => {
    navigate(`/mypage/instructor/class-list/${lessonId}`);
  };

  return (
    <div className={styles.layoutStyle}>
      <Header.Root isColor={true}>
        <Header.BackIcon />
        <Header.Title title="내 클래스 목록" />
      </Header.Root>
      <div className={styles.containerStyle}>
        <Text tag="b2" color="gray9">
          전체 {totalLessons}
        </Text>
        <Flex direction="column" gap="1.2rem" marginTop="1.6rem">
          {MOCK_MYLESSON_DATA.lessons.map((lesson: LessonCardProps) => (
            <ClassCard isReservation={false} key={lesson.lessonId} {...lesson}>
              <BoxButton variant="outline" isDisabled={true}>
                취소하기
              </BoxButton>
              <BoxButton variant="outline" onClick={() => handleDetailClick(lesson.lessonId)}>
                상세보기
              </BoxButton>
            </ClassCard>
          ))}
        </Flex>
      </div>
    </div>
  );
};

export default ClassList;
