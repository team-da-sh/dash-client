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
  newWrapperStyle,
} from '@/pages/home/components/LessonItem/newLessonItem.css';
import type { LessonTypes } from '@/pages/home/types/classTypes';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Head from '@/shared/components/Head/Head';
import Tag from '@/shared/components/Tag/Tag';
import Text from '@/shared/components/Text/Text';
import { genreMapping, levelMapping } from '@/shared/constants';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import { transformDateToDotFormat } from '@/shared/utils/transformDateToDotFormat';

const LessonItem = ({
  id,
  genre,
  level,
  name,
  imageUrl,
  teacherProfileImage,
  teacherName,
  startDate,
  endDate,
  remainingDays,
  useNewStyles = false,
}: Omit<LessonTypes, 'location'> & { useNewStyles?: boolean }) => {
  const navigate = useNavigate();

  const styles = useNewStyles
    ? {
        classImage: newClassImageStyle,
        teacherImage: newTeacherImageStyle,
        wrapper: newWrapperStyle,
        deadlineTag: newDeadlineTagStyle,
      }
    : {
        classImage: classImageStyle,
        teacherImage: teacherImageStyle,
        wrapper: wrapperStyle,
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
      {remainingDays < 4 && (
        <Tag type="deadline" size="thumbnail" className={styles.deadlineTag}>{`마감 D-${remainingDays || 'Day'}`}</Tag>
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

      {teacherProfileImage && teacherName && (
        <div className={sprinkles({ display: 'flex', gap: 6, alignItems: 'center' })}>
          <img src={teacherProfileImage} alt="강사" className={styles.teacherImage} />
          <Text tag="b3_m">{teacherName}</Text>
        </div>
      )}

      {startDate && endDate && (
        <div className={sprinkles({ display: 'flex', gap: 4, alignItems: 'center' })}>
          <Text tag="c1_r_narrow" color="gray5">
            {transformDateToDotFormat(startDate)} - {transformDateToDotFormat(endDate)}
          </Text>
        </div>
      )}
    </li>
  );
};

export default LessonItem;
