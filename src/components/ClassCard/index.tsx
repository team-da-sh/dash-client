import { ClassCardProps } from '@/pages/home/types/classCardTypes';
import * as styles from '@/components/ClassCard/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Tag from '@/components/Tag';
import Text from '@/components/Text';
import { formatLessonDateRange } from '@/utils/timeCalculate';
import { getClassStatus } from '@/utils/timeCalculate';
import { IcArrowRightGray0614, IcClassEndMain0324, IcClassIngMain0324, IcClassSoonMain0324 } from '@/assets/svg';
import { genreMapping, levelMapping } from '@/constants';

const ClassCard = ({
  lessonName,
  lessonImageUrl,
  lessonGenre,
  lessonLevel,
  lessonLocation,
  lessonStartDateTime,
  lessonDetailedAddress,
  lessonEndDateTime,
  isReservation = true,
  children,
  onClick,
}: ClassCardProps) => {
  // 클래스 상태 계산
  const { status, remainingDays } = getClassStatus(lessonStartDateTime, lessonEndDateTime);

  // 상태 한글 번역
  const korstatus = () => {
    if (isReservation) {
      switch (status) {
        case 'upcoming':
          return '수강예정';
        case 'ongoing':
          return '수강중';
        case 'completed':
          return '수강완료';
        default:
          return '';
      }
    } else {
      switch (status) {
        case 'upcoming':
          return '모집중';
        case 'completed':
          return '모집완료';
        case 'ongoing':
          return '모집완료';
        default:
          return '';
      }
    }
  };

  // 상태 아이콘 반환
  const statusIcon = () => {
    switch (status) {
      case 'upcoming':
        return <IcClassSoonMain0324 width="1.8rem" />;
      case 'ongoing':
        return <IcClassIngMain0324 width="1.8rem" />;
      case 'completed':
        return <IcClassEndMain0324 width="1.8rem" />;
      default:
        return null;
    }
  };

  const handleTextClick = () => {
    window.open('https://forms.gle/JMYzQGxEdVHVogsE6', '_blank');
  };

  return (
    <div className={styles.cardContainerStyle} onClick={onClick}>
      <Flex justify="spaceBetween" align="center">
        <Flex align="center" gap="0.3rem" marginBottom="1.2rem">
          <Flex marginRight="0.5rem">{statusIcon()}</Flex>

          <Text tag="b4" color={status === 'completed' ? 'gray8' : 'black'}>
            {korstatus()}
          </Text>
          {isReservation && status === 'upcoming' && remainingDays !== undefined && (
            <Text tag="b7" color="main4">
              D - {remainingDays}
            </Text>
          )}
        </Flex>

        {isReservation && (
          <Flex align="center" gap="0.2rem">
            <Text tag="b7" color="gray7" onClick={handleTextClick}>
              문의하기
            </Text>
            <IcArrowRightGray0614 width="1.4rem" height="1.4rem" />
          </Flex>
        )}
      </Flex>

      <Flex gap="1.2rem" marginBottom="1.6rem">
        <img src={lessonImageUrl} className={styles.cardImageStyle} alt={`${lessonName} 이미지`} />
        <Flex direction="column" gap="0.8rem" className={styles.cardContentStyle}>
          <Flex gap="0.3rem">
            <Tag type="genre" size="small">
              {lessonGenre && genreMapping[lessonGenre]}
            </Tag>
            <Tag type="level" size="small">
              {lessonLevel && levelMapping[lessonLevel]}
            </Tag>
          </Flex>
          <Head level="h2" tag="h6" className={styles.lessonNameStyle}>
            {lessonName}
          </Head>
          <Flex direction="column" gap="0.4rem">
            <Flex gap="0.8rem" align="center">
              <Text tag="c4" color="gray7">
                일정
              </Text>
              <Text tag="c1" color="gray9">
                <Text tag="c1" color="gray9">
                  {lessonStartDateTime &&
                    lessonEndDateTime &&
                    formatLessonDateRange(lessonStartDateTime, lessonEndDateTime)}
                </Text>
              </Text>
            </Flex>
            <Flex gap="0.8rem" align="center">
              <Text tag="c4" color="gray7">
                장소
              </Text>
              <Text tag="c1" color="gray9">
                {lessonLocation || lessonDetailedAddress ? (
                  <>
                    {lessonLocation}&nbsp;
                    {lessonDetailedAddress}
                  </>
                ) : (
                  '미정'
                )}
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
