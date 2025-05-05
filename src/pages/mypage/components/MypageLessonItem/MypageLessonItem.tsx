import LessonItem from '@/pages/home/components/LessonItem/LessonItem';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface TeacherLessonItemPropTypes {
  id: number;
  genre: string;
  level: string;
  name: string;
  imageUrl: string;
  dDay: number;
}

const MypageLessonItem = ({ id, genre, level, name, imageUrl, dDay }: TeacherLessonItemPropTypes) => {
  return (
    <LessonItem
      id={id}
      genre={genre}
      level={level}
      name={name}
      imageUrl={imageUrl}
      remainingDays={dDay}
      teacherProfileImage={''}
      teacherName={''}
      startDate={''}
      endDate={''}
      useNewStyles={false}
    />
  );
};

export default MypageLessonItem;
