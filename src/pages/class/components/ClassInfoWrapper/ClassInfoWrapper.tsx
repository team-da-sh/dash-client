import { useNavigate } from 'react-router-dom';
import * as styles from '@/pages/class/components/ClassInfoWrapper/classInfoWrapper.css';
import type { LessonDetailResponseTypes } from '@/pages/class/types/api';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import IcThunderMain0424 from '@/shared/assets/svg/IcThunderMain0424';
import Head from '@/shared/components/Head/Head';
import Tag from '@/shared/components/Tag/Tag';
import Text from '@/shared/components/Text/Text';
import { genreMapping } from '@/shared/constants/index';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import { vars } from '@/shared/styles/theme.css';

const ClassInfoWrapper = ({ lessonData }: { lessonData: LessonDetailResponseTypes }) => {
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
    <section className={sprinkles({ flexDirection: 'column', pt: 20, pr: 24, pb: 24, pl: 20 })}>
      <div className={sprinkles({ display: 'flex', mb: 12, gap: 4 })}>
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
      </div>

      <Head level="h2" tag="h4" className={sprinkles({ mb: 16 })}>
        {name}
      </Head>

      <div
        className={sprinkles({ display: 'flex', alignItems: 'center', gap: 8 })}
        onClick={() => handleTeacherClick(teacherId)}>
        <img src={teacherImageUrl} alt={`${teacherNickname} 프로필`} className={styles.profileStyle} />
        <Text tag="b2" color="gray9">
          {teacherNickname}
        </Text>
      </div>

      <div
        className={sprinkles({
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
          alignItems: 'center',
          gap: 8,
          mb: 15,
        })}>
        <Head level="h4" tag="h5" color="gray6">
          {lessonRounds.length}회
        </Head>
        <div className={sprinkles({ display: 'flex', alignItems: 'center', gap: 2 })}>
          <Head level="h5" tag="h2">
            {price.toLocaleString()}
          </Head>
          <Head level="h5" tag="h2">
            원
          </Head>
        </div>
      </div>

      <div className={styles.cardStyle}>
        <IcThunderMain0424 width={'2.4rem'} color={iconColor} className={sprinkles({ mr: 4 })} />
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
    </section>
  );
};

export default ClassInfoWrapper;
