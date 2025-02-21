import { useNavigate } from 'react-router-dom';
import { useGetMyLessons } from '@/pages/instructor/classList/apis/queries';
import { containerStyle, layoutStyle } from '@/pages/instructor/classList/classList.css';
import { handleBoxButtonClick, handleCancelClick, handleClassCardClick } from '@/pages/mypage/utils/clickUtils';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import ClassCard from '@/shared/components/ClassCard/ClassCard';
import Flex from '@/shared/components/Flex/Flex';
import Header from '@/shared/components/Header/Header';
import Text from '@/shared/components/Text/Text';
import { Lesson } from '@/shared/types/lessonTypes';

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
              onClick={() => handleClassCardClick(navigate, lesson.id)}
              isReservation={false}
              key={lesson.id}
              lessonName={lesson.name}
              lessonImageUrl={lesson.imageUrl}
              lessonGenre={lesson.genre}
              lessonLevel={lesson.level}
              lessonLocation={lesson.location}
              lessonStartDateTime={lesson.startDateTime}
              lessonEndDateTime={lesson.endDateTime}>
              <BoxButton onClick={handleCancelClick} variant="temp">
                수정하기
              </BoxButton>
              <BoxButton variant="outline" onClick={(e) => handleBoxButtonClick(e, navigate, lesson.id, false)}>
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
