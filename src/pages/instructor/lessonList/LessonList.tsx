import { useNavigate } from 'react-router-dom';
import { useGetMyLessons } from '@/pages/instructor/lessonList/apis/queries';
import type { LessonStatus } from '@/pages/instructor/lessonList/types/lessonStatus';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import ClassCard from '@/shared/components/ClassCard';
import { USER_ROLE } from '@/shared/constants/userRole';
import type { Lesson } from '@/shared/types/lessonTypes';

interface LessonListProps {
  status: LessonStatus;
}

const LessonList = ({ status }: LessonListProps) => {
  const { data: lessonData } = useGetMyLessons(status);

  const navigate = useNavigate();

  const handleClassCardClick = (id: number) => {
    navigate(ROUTES_CONFIG.class.path(id.toString()));
  };

  return (
    <>
      {lessonData?.lessons.map((lesson: Lesson) => (
        <ClassCard key={lesson.id} onClick={() => handleClassCardClick(lesson.id)}>
          <ClassCard.Header role={USER_ROLE.TEACHER} status={lesson.applyStatus} date={lesson.lessonDateTime} />
          <ClassCard.Body {...lesson} />
          <ClassCard.Footer showAsk={false}>
            <BoxButton variant="outline" onClick={() => handleClassCardClick(lesson.id)}>
              상세보기
            </BoxButton>
          </ClassCard.Footer>
        </ClassCard>
      ))}
    </>
  );
};

export default LessonList;
