import { useNavigate } from 'react-router-dom';
import { layoutStyle, containerStyle } from '@/pages/instructor/classList/index.css';
import BoxButton from '@/components/BoxButton';
import ClassCard from '@/components/ClassCard';
import Flex from '@/components/Flex';
import Header from '@/components/Header';
import Text from '@/components/Text';
import { notify } from '@/components/Toast';
import { useGetMyLessons } from '@/apis/classList/queries';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { Lesson } from '@/types/lessonTypes';

const ClassList = () => {
  const navigate = useNavigate();

  const { data: lessonData, isError, isLoading } = useGetMyLessons();

  // 로딩, 에러 페이지 처리
  if (isLoading) {
    return <div></div>;
  }

  if (isError) {
    return <div></div>;
  }

  const handleDetailClick = (lessonId: number) => {
    const path = ROUTES_CONFIG.instructorClassDetail.path(lessonId.toString());
    navigate(path);
  };

  return (
    <div className={layoutStyle}>
      <Header.Root isColor={true}>
        <Header.BackIcon />
        <Header.Title title="내 클래스 목록" />
      </Header.Root>
      <div className={containerStyle}>
        <Text tag="b2" color="gray9">
          전체 {lessonData?.count}
        </Text>
        <Flex direction="column" gap="1.2rem" marginTop="1.6rem">
          {lessonData?.lessons.map((lesson: Lesson) => (
            <ClassCard
              isReservation={false}
              key={lesson.id}
              lessonName={lesson.name}
              lessonImageUrl={lesson.imageUrl}
              lessonGenre={lesson.genre}
              lessonLevel={lesson.level}
              lessonLocation={lesson.location}
              lessonStartDateTime={lesson.startDateTime}
              lessonEndDateTime={lesson.endDateTime}>
              <BoxButton variant="temp" onClick={() => notify()}>
                수정하기
              </BoxButton>
              <BoxButton variant="outline" onClick={() => handleDetailClick(lesson.id)}>
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
