import LessonItem from '@/pages/home/components/LessonItem';
import {
  deadlineLessonWrapperStyle,
  containerStyle,
  titleStyle,
} from '@/pages/home/components/UpcomingLessons/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { useGetUpcomingLessons } from '@/apis/home/queries';

const UpcomingLessones = () => {
  const { data } = useGetUpcomingLessons();

  return (
    <div className={deadlineLessonWrapperStyle}>
      <Head level="h2" tag="h4" className={titleStyle}>
        놓치면 아쉬울 마지막 기회
      </Head>
      <Flex tag="ul" marginTop="2rem" gap="0.8rem" className={containerStyle}>
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

export default UpcomingLessones;
