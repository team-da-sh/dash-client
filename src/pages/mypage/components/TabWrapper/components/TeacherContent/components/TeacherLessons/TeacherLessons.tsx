import MypageLessonItem from '@/pages/mypage/components/MypageLessonItem/MypageLessonItem';
import {
  lessonResponseTypes,
  LessonDataResponseTypes,
} from '@/pages/mypage/components/TabWrapper/components/TeacherContent/types/api';
import * as styles from './teacherLessons.css';

const TeacherLessons = ({ data }: { data: LessonDataResponseTypes }) => {
  return (
    <ul className={styles.containerStyle}>
      {data?.lessons?.map((lesson: lessonResponseTypes) => <MypageLessonItem key={lesson.id} {...lesson} />)}
    </ul>
  );
};

export default TeacherLessons;
