import LessonItem from '@/pages/home/components/LessonItem';
import {
  recommandLessonWrapperStyle,
  containerStyle,
  titleStyle,
} from '@/pages/home/components/RecommendationLessons/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { useGetRecommendationLessons } from '@/apis/home/queries';

const RecommendationLessons = () => {
  const { data } = useGetRecommendationLessons();

  return (
    <div className={recommandLessonWrapperStyle}>
      <Head level="h2" tag="h4" className={titleStyle}>
        이 클래스는 꼭 들어야 해요!
      </Head>
      <Flex tag="ul" gap="0.8rem" marginTop="2rem" className={containerStyle}>
        {data?.lessons.map((lesson) => (
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
      </Flex>
    </div>
  );
};

export default RecommendationLessons;
