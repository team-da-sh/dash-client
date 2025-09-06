import { useNavigate } from 'react-router-dom';
import { useGetMyLessons } from '@/pages/instructor/lessonList/apis/queries';
import { emptyTextStyle } from '@/pages/instructor/lessonList/lessonList.css';
import type { LessonStatus } from '@/pages/instructor/lessonList/types/lessonStatus';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import ClassCard from '@/shared/components/ClassCard';
import Text from '@/shared/components/Text/Text';
import { USER_ROLE } from '@/shared/constants/userRole';
import type { Lesson } from '@/shared/types/lessonTypes';

interface LessonListProps {
  status: LessonStatus;
}

const LessonList = ({ status }: LessonListProps) => {
  const { data: lessonData } = useGetMyLessons(status);

  const navigate = useNavigate();

  const handleClassCardClick = (id: number) => {
    navigate(ROUTES_CONFIG.instructorClassDetail.path(id.toString()));
  };

  if (!lessonData) return <></>;

  return (
    <>
      {lessonData?.count > 0 ? (
        lessonData?.lessons.map((lesson: Lesson) => (
          <ClassCard key={lesson.id} onClick={() => handleClassCardClick(lesson.id)}>
            <ClassCard.Header role={USER_ROLE.TEACHER} status={lesson.applyStatus} date={lesson.lessonDateTime} />
            <ClassCard.Body {...lesson} />
            <ClassCard.Footer showAsk={false}>
              <BoxButton variant="outline" onClick={() => handleClassCardClick(lesson.id)}>
                상세보기
              </BoxButton>
            </ClassCard.Footer>
          </ClassCard>
        ))
      ) : (
        <Text tag="b1_sb" color="gray7" className={emptyTextStyle}>
          해당하는 클래스가 없어요.
        </Text>
      )}
    </>
  );
};

export default LessonList;
