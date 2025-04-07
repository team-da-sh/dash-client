import { useGetUpcomingLessons } from '@/pages/home/apis/queries';
import LessonItem from '@/pages/home/components/LessonItem/LessonItem';
import {
  containerStyle,
  deadlineLessonWrapperStyle,
  titleStyle,
} from '@/pages/home/components/UpcomingLessons/upcomingLessons.css';
import Head from '@/shared/components/Head/Head';

const UpcomingLessones = () => {
  const { data: upcomingLessonList } = useGetUpcomingLessons();

  return (
    <div className={deadlineLessonWrapperStyle}>
      <Head level="h2" tag="h4" className={titleStyle}>
        놓치면 아쉬울 마지막 기회
      </Head>
      <ul className={containerStyle}>
        {upcomingLessonList?.lessons.map((lesson) => <LessonItem key={lesson.id} useNewStyles={false} {...lesson} />)}
      </ul>
    </div>
  );
};

export default UpcomingLessones;
