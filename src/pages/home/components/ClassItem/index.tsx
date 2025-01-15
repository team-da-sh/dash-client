import {
  classImageStyle,
  deadlineTagStyle,
  teacherImageStyle,
  wrapperStyle,
} from '@/pages/home/components/ClassItem/index.css';
import Divider from '@/components/Divider';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Tag from '@/components/Tag';
import Text from '@/components/Text';
import { ClassTypes } from '@/types/classTypes';

const transformDateToDotFormat = (dateString: string) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
};

const getDateDiff = (date: string) => {
  const date1 = new Date();
  const date2 = new Date(date);

  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);

  const diffDate = date1.getTime() - date2.getTime();

  return Math.abs(diffDate / (1000 * 60 * 60 * 24));
};

const ClassItem = ({
  lessonId,
  lessonImageUrl,
  lessonLevel,
  lessonGenre,
  lessonName,
  teacherNickname,
  teacherImageUrl,
  lessonStartDateTime,
  lessonEndDateTime,
  lessonStreetAddress,
}: ClassTypes) => {
  const lessonAddress = lessonStreetAddress.split(' ').slice(0, 2).join(' ');

  const remainingDate = getDateDiff(lessonStartDateTime);

  return (
    <Flex tag="li" direction="column" gap="0.8rem" key={lessonId}>
      <img src={lessonImageUrl} alt="클래스 섬네일" className={classImageStyle} />
      {remainingDate < 4 && (
        <Tag type="deadline" size="small" className={deadlineTagStyle}>{`마감 D-${remainingDate}`}</Tag>
      )}

      <Flex gap="0.4rem">
        <Tag type="genre" size="small">
          {lessonGenre}
        </Tag>
        <Tag type="level" size="small">
          {lessonLevel}
        </Tag>
      </Flex>

      <Head level="h3" tag="h7">
        {lessonName}
      </Head>

      <Flex direction="column" gap="0.4rem">
        <Flex gap="0.6rem" align="center">
          <img src={teacherImageUrl} alt="강사" className={teacherImageStyle} />
          <Text tag="b7">{teacherNickname}</Text>
        </Flex>

        <Flex gap="0.4rem" align="center">
          <Text tag="c2" color="gray5">
            {transformDateToDotFormat(lessonStartDateTime)} - {transformDateToDotFormat(lessonEndDateTime)}
          </Text>
          <Divider direction="vertical" length={'0.7rem'} color="teritory" />
          <Text tag="c2" color="gray5">
            {lessonAddress}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ClassItem;
