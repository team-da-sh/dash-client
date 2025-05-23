import LessonItem from '@/pages/home/components/LessonItem/LessonItem';
import type {
  lessonResponseTypes,
  LessonDataResponseTypes,
} from '@/pages/mypage/components/TabWrapper/components/TeacherContent/types/api';
import * as styles from './teacherLessons.css';

const TeacherLessons = ({ data }: { data: LessonDataResponseTypes }) => {
  return (
    <ul className={styles.containerStyle}>
      {data?.lessons?.map((lesson: lessonResponseTypes) => (
        <li key={lesson.id}>
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
