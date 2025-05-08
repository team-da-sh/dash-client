import LessonItem from '@/pages/home/components/LessonItem/LessonItem';
import { containerStyle } from '@/pages/mypage/components/MypageLessonItem/mypageLessonItem.css';

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
    <div className={containerStyle}>
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
    </div>
  );
};

export default MypageLessonItem;
