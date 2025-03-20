import { useNavigate } from 'react-router-dom';
import {
  cardStyle,
  lessonNameStyle,
  profileStyle,
  thunderIconStyle,
} from '@/pages/class/components/ClassInfoWrapper/classInfoWrapper.css';
import { LessonDetailResponse } from '@/pages/class/types/api';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import IcThunderMain0424 from '@/shared/assets/svg/IcThunderMain0424';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import Tag from '@/shared/components/Tag/Tag';
import Text from '@/shared/components/Text/Text';
import { genreMapping } from '@/shared/constants/index';
import { vars } from '@/shared/styles/theme.css';

const ClassInfoWrapper = ({ lessonData }: { lessonData: LessonDetailResponse }) => {
  const {
    genre,
    name,
    teacherId,
    teacherImageUrl,
    teacherNickname,
    lessonRound: { lessonRounds },
    price,
    maxReservationCount,
    reservationCount,
    remainingDays,
  } = lessonData;
  const translatedGenre = genreMapping[genre] || genre;

  // D-DAY remaingDays로 통일
  const dDay = remainingDays > 0 ? `D-${remainingDays}` : remainingDays === 0 ? 'D-DAY' : '마감';

  // 남은 예약 가능 인원 계산
  const remainingSeats = maxReservationCount - reservationCount;

  const isSoldOut = remainingSeats <= 0;
  const remainingText = isSoldOut ? '신청 마감된 수업이에요' : `${remainingSeats}`;
  const iconColor = isSoldOut ? vars.colors.alert03 : vars.colors.main04;
  const textColor = isSoldOut ? 'alert3' : 'main4';

  const navigate = useNavigate();

  const handleTeacherClick = (dancerId: number) => {
    const path = ROUTES_CONFIG.dancer.path(dancerId.toString());
    navigate(path);
  };

  return (
    <Flex direction="column" paddingTop="2rem" paddingRight="2.4rem" paddingBottom="2.4rem" paddingLeft="2rem">
      <Flex gap="0.4rem" marginBottom="1.2rem">
        <Tag type="genre" size="medium">
          <Text tag="b7" color="white">
            {translatedGenre}
          </Text>
        </Tag>
        <Tag type="deadline" size="medium">
          <Text tag="b7" color="white">
            {dDay}
          </Text>
        </Tag>
      </Flex>

      <Head level="h2" tag="h4" className={lessonNameStyle}>
        {name}
      </Head>

      <Flex align="center" gap="0.8rem" onClick={() => handleTeacherClick(teacherId)}>
        <img src={teacherImageUrl} alt={`${teacherNickname} 프로필`} className={profileStyle} />
        <Text tag="b2" color="gray9">
          {teacherNickname}
        </Text>
      </Flex>

      <Flex justify="flexEnd" width="100%" align="center" gap="0.8rem" marginBottom="1.5rem">
        <Head level="h4" tag="h5" color="gray6">
          {lessonRounds.length}회
        </Head>
        <Flex align="center" gap="0.2rem">
          <Head level="h5" tag="h2">
            {price.toLocaleString()}
          </Head>
          <Head level="h5" tag="h2">
            원
          </Head>
        </Flex>
      </Flex>

      <div className={cardStyle}>
        <IcThunderMain0424 width={'2.4rem'} color={iconColor} className={thunderIconStyle} />
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
  );
};

export default ClassInfoWrapper;
