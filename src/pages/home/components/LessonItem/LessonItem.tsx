import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import {
  classImageStyle,
  deadlineTagStyle,
  teacherImageStyle,
  titleStyle,
  wrapperStyle,
} from '@/pages/home/components/LessonItem/lessonItem.css';
import {
  newClassImageStyle,
  newDeadlineTagStyle,
  newTeacherImageStyle,
  myPageWrapperStyle,
  myPageImageStyle,
  newWrapperStyle,
} from '@/pages/home/components/LessonItem/newLessonItem.css';
import type { LessonTypes } from '@/pages/home/types/classTypes';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Head from '@/shared/components/Head/Head';
import Tag from '@/shared/components/Tag/Tag';
import Text from '@/shared/components/Text/Text';
import { genreMapping, levelMapping } from '@/shared/constants';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import { calculateRemainingDate } from '@/shared/utils/dateCalculate';
import { MAX_REMAINING_DAYS, MIN_REMAINING_DAYS } from '@/pages/home/constants/index';

const LessonItem = ({
  id,
  genre,
  level,
  name,
  imageUrl,
  teacherProfileImage,
  teacherName,
  remainingDays,
  startDate,
  useNewStyles = false,
  isMyPage = false,
}: Omit<LessonTypes, 'location'> & { useNewStyles?: boolean; isMyPage?: boolean }) => {
  const navigate = useNavigate();

  const styles = useNewStyles
    ? {
        classImage: newClassImageStyle,
        teacherImage: newTeacherImageStyle,
        wrapper: newWrapperStyle,
        deadlineTag: newDeadlineTagStyle,
      }
    : {
        classImage: isMyPage ? myPageImageStyle : classImageStyle,
        teacherImage: teacherImageStyle,
        wrapper: isMyPage ? myPageWrapperStyle : wrapperStyle,
        deadlineTag: deadlineTagStyle,
      };

  const handleLessonClick = () => {
    navigate(ROUTES_CONFIG.class.path(`${id}`));
  };

  return (
    <li
      className={clsx(styles.wrapper, sprinkles({ display: 'flex', flexDirection: 'column', gap: 8 }))}
      onClick={handleLessonClick}>
      <img src={imageUrl} alt="클래스 섬네일" className={styles.classImage} />
      {remainingDays < MAX_REMAINING_DAYS && remainingDays >= MIN_REMAINING_DAYS && (
        <Tag type="deadline" size="thumbnail" className={styles.deadlineTag}>
          {calculateRemainingDate(startDate, remainingDays)}
        </Tag>
      )}

      <div className={sprinkles({ display: 'flex', gap: 4 })}>
        <Tag type="genre" size="small">
          {genreMapping[genre]}
        </Tag>
        <Tag type="level" size="small">
          {levelMapping[level]}
        </Tag>
      </div>

      <Head level="h3" tag="b1_sb_long" className={titleStyle}>
        {name}
      </Head>

      <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 4 })}>
        {teacherProfileImage && teacherName && (
          <div className={sprinkles({ display: 'flex', gap: 6, alignItems: 'center' })}>
            <img src={teacherProfileImage} alt="강사" className={styles.teacherImage} />
            <Text tag="b3_m">{teacherName}</Text>
          </div>
        )}
      </div>
    </li>
  );
};

export default LessonItem;
