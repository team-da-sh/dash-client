import { useGetLatestLessons } from '@/pages/home/apis/queries';
import {
  containerStyle,
  latestLessonWrapperStyle,
  titleStyle,
} from '@/pages/home/components/LatestLessons/latestLessons.css';
import LessonItem from '@/pages/home/components/LessonItem/LessonItem';
import Head from '@/shared/components/Head/Head';

const LatestLessons = () => {
  const { data: latestLessonDatas } = useGetLatestLessons();

  return (
    <section className={containerStyle} aria-labelledby="latest-lessons-title">
      <Head level="h2" tag="h5_sb" className={titleStyle} id="latest-lessons-title">
        따끈따끈 신상 클래스
      </Head>

      <ul className={latestLessonWrapperStyle} aria-label="신상 클래스">
        {latestLessonDatas?.lessons?.map((lesson) => (
          <li key={lesson.id}>
            <LessonItem key={lesson.id} linkType="detail" {...lesson} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LatestLessons;
