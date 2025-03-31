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
      <Head level="h2" tag="h4" className={titleStyle}>
        이 클래스는 꼭 들어야 해요!
      </Head>
      <ul className={recommandLessonWrapperStyle}>
        {recommendationLessonDatas?.lessons.map((lesson) => (
          <LessonItem
            key={lesson.id}
            id={lesson.id}
            imageUrl={lesson.imageUrl}
            level={lesson.level}
            genre={lesson.genre}
            name={lesson.name}
            teacherName={lesson.teacherName}
            teacherProfileImage={lesson.teacherProfileImage}
            startDate={lesson.startDate}
            endDate={lesson.endDate}
            remainingDays={lesson.remainingDays}
            useNewStyles={false}
          />
        ))}
      </ul>
    </div>
  );
};

export default RecommendationLessons;
