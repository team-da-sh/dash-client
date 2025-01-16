import {
  profileStyle,
  lessonNameStyle,
  cardStyle,
  thunderIconStyle,
} from '@/pages/class/ClassInfoWrapper/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Tag from '@/components/Tag';
import Text from '@/components/Text';
import { calculateDday } from '@/utils/dataCalculate';
import { IcThunderMain0424 } from '@/assets/svg';
import { vars } from '@/styles/theme.css';
import { LESSON_DATA } from '@/mocks/mockLessonData';

const ClassInfoWrapper = () => {
  const {
    lessonGenre,
    lessonName,
    teacherImageUrl,
    teacherNickname,
    lessonRound,
    individualPrice,
    maxReservationCount,
    reservationCount,
  } = LESSON_DATA;

  // D-Day 계산
  const dDay = calculateDday(lessonRound[0].lessonStartDateTime);

  // 총 가격 계산
  const totalPrice = lessonRound.length * individualPrice;

  // 남은 예약 가능 인원 계산
  const remainingSeats = maxReservationCount - reservationCount;

  const isSoldOut = remainingSeats <= 0;
  const remainingText = isSoldOut ? '마감되었어요' : `${remainingSeats}`;
  const iconColor = isSoldOut ? vars.colors.alert03 : vars.colors.main04;
  const textColor = isSoldOut ? 'alert3' : 'main4';

  return (
    <>
      <Flex direction="column" paddingTop="2rem" paddingRight="2.4rem" paddingBottom="2.4rem" paddingLeft="2rem">
        <Flex gap="0.4rem" marginBottom="1.2rem">
          <Tag type="genre" size="medium">
            <Text tag="b7" color="white">
              {lessonGenre}
            </Text>
          </Tag>
          <Tag type="deadline" size="medium">
            <Text tag="b7" color="white">
              {dDay}
            </Text>
          </Tag>
        </Flex>

        <Head level="h2" tag="h4" className={lessonNameStyle}>
          {lessonName}
        </Head>

        <Flex align="center" gap="0.8rem">
          <img src={teacherImageUrl} alt={`${teacherNickname} 프로필`} className={profileStyle} />
          <Text tag="b2" color="gray9">
            {teacherNickname}
          </Text>
        </Flex>

        <Flex justify="flexEnd" width="100%" align="center" gap="0.8rem" marginBottom="1.5rem">
          <Head level="h4" tag="h5" color="gray6">
            {lessonRound.length}회
          </Head>
          <Flex align="center" gap="0.2rem">
            <Head level="h5" tag="h2">
              {totalPrice.toLocaleString()}
            </Head>
            <Head level="h5" tag="h2">
              원
            </Head>
          </Flex>
        </Flex>

        <div className={cardStyle}>
          <IcThunderMain0424 width={24} color={iconColor} className={thunderIconStyle} />
          <Text tag="b2" color="black">
            {isSoldOut ? '' : '마감까지'}
          </Text>
          <Text tag="b2" color={textColor}>
            {remainingText}
          </Text>
          <Text tag="b2" color="black">
            {isSoldOut ? '' : '명 남았어요!'}
          </Text>
        </div>
      </Flex>
    </>
  );
};

export default ClassInfoWrapper;
