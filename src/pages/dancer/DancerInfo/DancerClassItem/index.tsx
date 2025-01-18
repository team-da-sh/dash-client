import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Tag from '@/components/Tag';
import { classImageStyle, wrapperStyle, deadlineTagStyle } from '@/pages/dancer/DancerInfo/DancerClassItem/index.css';
import { calculateDday } from '@/utils/dateCalculate';
import { isWithinFourDays } from '@/utils/dateCalculate';

interface DancerClassItemProps {
  lessonImageUrl: string;
  lessonStartDateTime: string;
  lessonGenre: string;
  lessonLevel: string;
  lessonName: string;
}

const DancerClassItem = ({
  lessonImageUrl,
  lessonStartDateTime,
  lessonGenre,
  lessonLevel,
  lessonName,
}: DancerClassItemProps) => {
  const dDay = calculateDday(lessonStartDateTime);
  const { isWithin, isPast } = isWithinFourDays(lessonStartDateTime);

  return (
    <Flex width="16.4rem" direction="column" gap="0.8rem" className={wrapperStyle}>
      <img src={lessonImageUrl} alt="클래스 섬네일" className={classImageStyle} />

      {isWithin && !isPast && (
        <Tag type="deadline" size="thumbnail" className={deadlineTagStyle}>
          {dDay === '마감' ? '마감' : `마감 ${dDay}`}
        </Tag>
      )}
      {isPast && (
        <Tag type="deadline" size="thumbnail" className={deadlineTagStyle}>
          마감
        </Tag>
      )}

      <Flex gap="0.4rem">
        <Tag type="genre" size="small">
          {lessonGenre}
        </Tag>
        <Tag type="level" size="small">
          {lessonLevel}
        </Tag>
      </Flex>

      <Head level="h5" tag="h7">
        {lessonName}
      </Head>
    </Flex>
  );
};

export default DancerClassItem;
