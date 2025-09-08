import { useNavigate } from 'react-router-dom';
import LessonItem from '@/pages/home/components/LessonItem/LessonItem';
import type {
  lessonResponseTypes,
  LessonDataResponseTypes,
} from '@/pages/mypage/components/TabWrapper/components/TeacherContent/types/api';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import * as styles from './teacherLessons.css';

const TeacherLessons = ({ data }: { data: LessonDataResponseTypes }) => {
  const navigate = useNavigate();

  const handleCardClick = (id: number, e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.stopPropagation();

    navigate(ROUTES_CONFIG.instructorClassDetail.path(id.toString()));
  };

  return (
    <ul className={styles.containerStyle}>
      {data?.lessons?.map((lesson: lessonResponseTypes) => (
        <li key={lesson.id} onClickCapture={(e) => handleCardClick(lesson.id, e)}>
          <LessonItem
            id={lesson.id}
            genre={lesson.genre}
            level={lesson.level}
            name={lesson.name}
            imageUrl={lesson.imageUrl}
            remainingDays={lesson.dDay}
            teacherProfileImage={''}
            teacherName={''}
            startDate={''}
            endDate={''}
            useNewStyles={false}
            isMyPage={true}
          />
        </li>
      ))}
    </ul>
  );
};

export default TeacherLessons;
