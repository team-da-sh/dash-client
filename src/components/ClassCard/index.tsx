import * as styles from '@/components/ClassCard/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Tag from '@/components/Tag';
import Text from '@/components/Text';
import { formatLessonDateRange } from '@/utils/timeCalculate';
import { getClassStatus } from '@/utils/timeCalculate';
import { IcArrowRightGray0614 } from '@/assets/svg';

interface classCardProps {
  lessonId?: string;
  reservationId?: string;
  lessonName: string;
  lessonImageUrl: string;
  lessonGenre: string;
  lessonLevel: string;
  lessonLocation: string;
  lessonStartDateTime: string;
  lessonEndDateTime: string;
  isReservation?: boolean;
  children?: React.ReactNode;
}
const ClassCard = ({
  lessonId,
  reservationId,
  lessonName,
  lessonImageUrl,
  lessonGenre,
  lessonLevel,
  lessonLocation,
  lessonStartDateTime,
  lessonEndDateTime,
  isReservation = true,
  children,
}: classCardProps) => {
  // 클래스 상태 계산
  const { status, remainingDays } = getClassStatus(lessonStartDateTime, lessonEndDateTime);

  return (
    <div className={styles.cardContainerStyle}>
      <Flex justify="spaceBetween" align="center">
        <Flex align="center" gap="0.2rem" marginBottom="1.2rem">
          {isReservation ? (
            <>
              <Text tag="b4" color={status === 'completed' ? 'gray8' : 'black'}>
                {status === 'upcoming' && '수강예정'}
                {status === 'ongoing' && '수강중'}
                {status === 'completed' && '수강완료'}
              </Text>
              {status === 'upcoming' && remainingDays !== undefined && (
                <Text tag="b7" color="main4">
                  D-{remainingDays}
                </Text>
              )}
            </>
          ) : (
            <Text tag="b4" color={status === 'completed' ? 'gray8' : 'black'}>
              {status === 'upcoming' ? '모집중' : '모집완료'}
            </Text>
          )}
        </Flex>

        <Flex align="center" gap="0.2rem">
          <Text tag="b7" color="gray7">
            문의하기
          </Text>
          <IcArrowRightGray0614 width="1.4rem" height="1.4rem" />
        </Flex>
      </Flex>

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
