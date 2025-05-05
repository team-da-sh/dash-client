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
    <div className={containerStyle}>
      <Head level="h2" tag="h5_sb" className={titleStyle}>
        따끈따끈 신상 클래스
      </Head>
      <ul className={latestLessonWrapperStyle}>
        {latestLessonDatas?.lessons.map((lesson) => <LessonItem key={lesson.id} useNewStyles={false} {...lesson} />)}
      </ul>
    </div>
  );
};

export default LatestLessons;
