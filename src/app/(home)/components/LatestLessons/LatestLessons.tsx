import { getLatestLessons } from '@/app/(home)/apis/ky';
import {
  containerStyle,
  latestLessonWrapperStyle,
  titleStyle,
} from '@/app/(home)/components/LatestLessons/latestLessons.css';
import LessonItem from '@/app/(home)/components/LessonItem/LessonItem';
import Head from '@/common/components/Head/Head';

const LatestLessons = async () => {
  const latestLessons = await getLatestLessons();

  return (
    <section className={containerStyle} aria-labelledby="latest-lessons-title">
      <Head level="h2" tag="h5_sb" className={titleStyle} id="latest-lessons-title">
        따끈따끈 신상 클래스
      </Head>

      <ul className={latestLessonWrapperStyle} aria-label="신상 클래스">
        {latestLessons.lessons.map((lesson) => (
          <LessonItem key={lesson.id} linkType="detail" {...lesson} />
        ))}
      </ul>
    </section>
  );
};

export default LatestLessons;
