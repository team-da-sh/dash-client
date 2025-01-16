import * as styles from '@/components/ClassCard/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Tag from '@/components/Tag';
import Text from '@/components/Text';
import { formatLessonDateRange } from '@/utils/timeCalculate';

interface classCardProps {
  lessonName: string;
  lessonImageUrl: string;
  lessonGenre: string;
  lessonLevel: string;
  lessonLocation: string;
  lessonStartDateTime: string;
  lessonEndDateTime: string;
  children?: React.ReactNode;
}
const ClassCard = ({
  lessonName,
  lessonImageUrl,
  lessonGenre,
  lessonLevel,
  lessonLocation,
  lessonStartDateTime,
  lessonEndDateTime,
  children,
}: classCardProps) => {
  return (
    <div className={styles.cardContainerStyle}>
      <Flex gap="1.2rem" marginBottom="1.6rem">
        <img src={lessonImageUrl} className={styles.cardImageStyle} alt={`${lessonName} 이미지`} />
        <Flex direction="column" gap="0.8rem">
          <Flex gap="0.3rem">
            <Tag type="genre" size="small">
              {lessonGenre}
            </Tag>
            <Tag type="level" size="small">
              {lessonLevel}
            </Tag>
          </Flex>
          <Head level="h2" tag="h6">
            {lessonName}
          </Head>
          <Flex direction="column" gap="0.4rem">
            <Flex gap="0.8rem" align="center">
              <Text tag="c4" color="gray7">
                일정
              </Text>
              <Text tag="c1" color="gray9">
                <Text tag="c1" color="gray9">
                  {formatLessonDateRange(lessonStartDateTime, lessonEndDateTime)}
                </Text>
              </Text>
            </Flex>
            <Flex gap="0.8rem" align="center">
              <Text tag="c4" color="gray7">
                장소
              </Text>
              <Text tag="c1" color="gray9">
                {lessonLocation}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {children && <Flex gap="0.7rem">{children}</Flex>}
    </div>
  );
};

export default ClassCard;
