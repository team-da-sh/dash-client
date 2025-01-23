import { useNavigate } from 'react-router-dom';
import {
  classImageStyle,
  deadlineTagStyle,
  teacherImageStyle,
  titleStyle,
  wrapperStyle,
} from '@/pages/home/components/LessonItem/index.css';
import {
  newClassImageStyle,
  newDeadlineTagStyle,
  newTeacherImageStyle,
  newWrapperStyle,
} from '@/pages/home/components/LessonItem/newIndex.css';
import { LessonTypes } from '@/pages/home/types/classTypes';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Tag from '@/components/Tag';
import Text from '@/components/Text';
import { transformDateToDotFormat } from '@/utils/transformDateToDotFormat';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { genreMapping, levelMapping } from '@/constants';

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

      <Flex direction="column" gap="0.4rem">
        <Flex gap="0.6rem" align="center">
          <img src={teacherProfileImage} alt="강사" className={styles.teacherImage} />
          <Text tag="b7">{teacherName}</Text>
        </Flex>
        <Flex gap="0.4rem" align="center">
          <Text tag="c2" color="gray5">
            {transformDateToDotFormat(startDate)} - {transformDateToDotFormat(endDate)}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LessonItem;
