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
import { LessonTypes } from '@/pages/home/types/classTypes';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import Tag from '@/shared/components/Tag/Tag';
import Text from '@/shared/components/Text/Text';
import { genreMapping, levelMapping } from '@/shared/constants';
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
    <Flex tag="li" direction="column" gap="0.8rem" key={id} className={styles.wrapper} onClick={handleLessonClick}>
      <img src={imageUrl} alt="클래스 섬네일" className={styles.classImage} />
      {remainingDays < 4 && (
        <Tag type="deadline" size="thumbnail" className={styles.deadlineTag}>{`마감 D-${remainingDays || 'Day'}`}</Tag>
      )}

      <Flex direction="column" gap="0.6rem">
        <Flex gap="0.4rem">
          <Tag type="genre" size="small">
            {genreMapping[genre]}
          </Tag>
          <Tag type="level" size="small">
            {levelMapping[level]}
          </Tag>
        </Flex>

        <Head level="h3" tag="h7" className={titleStyle}>
          {name}
        </Head>
      </Flex>

      <Flex direction="column" gap="0.4rem">
        <Flex gap="0.6rem" align="center">
          <img src={teacherProfileImage} alt="강사" className={styles.teacherImage} />
          <Text tag="b7">{teacherName}</Text>
        </Flex>
        <Flex gap="0.4rem" align="center">
          <Text tag="c1" color="gray5">
            {transformDateToDotFormat(startDate)} - {transformDateToDotFormat(endDate)}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LessonItem;
