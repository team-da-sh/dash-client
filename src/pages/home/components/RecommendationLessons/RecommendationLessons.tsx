import { useGetRecommendationLessons } from '@/pages/home/apis/queries';
import LessonItem from '@/pages/home/components/LessonItem/LessonItem';
import {
  containerStyle,
  recommandLessonWrapperStyle,
  titleStyle,
} from '@/pages/home/components/RecommendationLessons/recommendationLessons.css';
import Head from '@/shared/components/Head/Head';

const RecommendationLessons = () => {
  const { data: recommendationLessonDatas } = useGetRecommendationLessons();

  return (
    <div className={containerStyle}>
      <Head level="h2" tag="h5_sb" className={titleStyle}>
        이 클래스는 꼭 들어야 해요!
      </Head>
      <ul className={recommandLessonWrapperStyle}>
        {recommendationLessonDatas?.lessons.map((lesson) => (
          <LessonItem key={lesson.id} useNewStyles={false} {...lesson} />
        ))}
      </ul>
    </div>
  );
};

export default RecommendationLessons;
