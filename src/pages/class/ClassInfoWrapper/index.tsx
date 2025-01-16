import { headerStyle, lessonCount, profileStyle, cardStyle } from '@/pages/class/ClassInfoWrapper/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Tag from '@/components/Tag';
import Text from '@/components/Text';
import { lessonData } from '@/constants/LessonData';
import { IcClose, IcThunderMain0424 } from '@/assets/svg';

// 날짜 계산 함수
const calculateDday = (startDateTime: string): string => {
  const today = new Date();
  const startDate = new Date(startDateTime);
  const difference = Math.ceil((startDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  return difference > 0 ? `D-${difference}` : difference === 0 ? 'D-Day' : '마감';
};

interface LessonData {
  lessonImageUrl: string;
  lessonGenre: string;
  lessonName: string;
  teacherNickname: string;
  lessonRound: Array<{ lessonStartDateTime: string; lessonEndDateTime: string }>;
  individualPrice: number;
  maxReservationCount: number;
  reservationCount: number;
}

const ClassInfoWrapper = () => {
  const {
    lessonImageUrl,
    lessonGenre,
    lessonName,
    teacherNickname,
    lessonRound,
    individualPrice,
    maxReservationCount,
    reservationCount,
  }: LessonData = lessonData;

  // D-Day 계산
  const dDay = calculateDday(lessonRound[0].lessonStartDateTime);

  // 총 가격 계산
  const totalPrice = lessonRound.length * individualPrice;

  // 남은 예약 가능 인원 계산
  const remainingSeats = maxReservationCount - reservationCount;

  return (
    <>
      <div
        className={headerStyle}
        style={{
          backgroundImage: `url(${lessonImageUrl})`,
        }}></div>

      <Flex
        direction="column"
        style={{
          padding: '2rem 2rem 2.4rem 2rem',
        }}>
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

        <Head level="h2" tag="h4" style={{ marginBottom: '1.6rem' }}>
          {lessonName}
        </Head>

        <Flex align="center" gap="0.8rem">
          <img src={lessonData.teacherImageUrl} alt={`${teacherNickname} 프로필`} className={profileStyle} />
          <Text tag="b2" color="gray9">
            {teacherNickname}
          </Text>
        </Flex>

        <Flex justify="flexEnd" width="100%" align="center" gap="0.8rem" marginBottom="1.5rem">
          <span className={lessonCount}>
            <Head tag="h5">{lessonRound.length}회</Head>
          </span>
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
          <IcThunderMain0424 width={24} style={{ marginRight: '0.7rem' }} />
          <Text tag="b2" color="black">
            마감까지
          </Text>
          <Text tag="b2" color="main4">
            {remainingSeats}
          </Text>
          <Text tag="b2" color="black">
            명 남았어요!
          </Text>
        </div>
      </Flex>
    </>
  );
};

export default ClassInfoWrapper;
