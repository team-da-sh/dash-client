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
import { getDateDiff } from '@/utils/getDateDiff';
import { transformDateToDotFormat } from '@/utils/transformDateToDotFormat';
import { ClassTypes } from '@/pages/home/types/classTypes';

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
    <Flex tag="li" direction="column" gap="0.8rem" key={lessonId} className={wrapperStyle}>
      <img src={lessonImageUrl} alt="클래스 섬네일" className={classImageStyle} />
      {remainingDate < 4 && (
        <Tag type="deadline" size="thumbnail" className={deadlineTagStyle}>{`마감 D-${remainingDate || 'Day'}`}</Tag>
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
          <Divider direction="vertical" length={'0.7rem'} color="tertiary" />
          <Text tag="c2" color="gray5">
            {lessonAddress}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ClassItem;
