import MypageLessonItem from '@/pages/mypage/components/MypageLessonItem/MypageLessonItem';
import { mockTeacherLessonData } from '../../../../mockData';
import * as styles from './teacherLessons.css';

const TeacherLessons = () => {
  const data = mockTeacherLessonData;
  return (
    <ul className={styles.containerStyle}>
      {data?.lessons.map((lesson) => <MypageLessonItem key={lesson.id} {...lesson} />)}
    </ul>
  );
};

export default TeacherLessons;
