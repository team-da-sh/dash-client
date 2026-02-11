import { fetchUpcomingLessons } from '@/app/(home)/apis/serverFetch';
import LessonItem from '@/app/(home)/components/LessonItem/LessonItem';
import {
  containerStyle,
  deadlineLessonWrapperStyle,
  titleStyle,
} from '@/app/(home)/components/UpcomingLessons/upcomingLessons.css';
import Head from '@/common/components/Head/Head';

const UpcomingLessons = async () => {
  const upcomingLessons = await fetchUpcomingLessons();
  const lessons = upcomingLessons.lessons.filter((lesson) => lesson.remainingDays <= 3);

  return (
    <section className={deadlineLessonWrapperStyle} aria-labelledby="upcoming-lessons-title">
      <Head level="h2" tag="h5_sb" className={titleStyle} id="upcoming-lessons-title">
        놓치면 아쉬울 마지막 기회
      </Head>
      <ul className={containerStyle}>
        {lessons.map((lesson) => (
          <LessonItem key={lesson.id} linkType="detail" useNewStyles={false} {...lesson} />
        ))}
      </ul>
    </section>
  );
};

export default UpcomingLessons;
