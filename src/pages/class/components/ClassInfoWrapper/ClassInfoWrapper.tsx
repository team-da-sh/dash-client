import { useNavigate } from 'react-router-dom';
import Card from '@/pages/class/components/Card/Card';
import * as styles from '@/pages/class/components/ClassInfoWrapper/classInfoWrapper.css';
import type { LessonDetailResponseTypes } from '@/pages/class/types/api';
import { getDDayLabel } from '@/pages/class/utils/dDay';
import type { GenreTypes } from '@/pages/onboarding/types/genreTypes';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Head from '@/shared/components/Head/Head';
import Tag from '@/shared/components/Tag/Tag';
import Text from '@/shared/components/Text/Text';
import { levelMapping, genreMapping } from '@/shared/constants/index';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const ClassInfoWrapper = ({ lessonData }: { lessonData: LessonDetailResponseTypes }) => {
  const {
    genre,
    name,
    teacherId,
    teacherImageUrl,
    teacherNickname,
    lessonRound: { lessonRounds },
    price,
    remainingDays,
    maxReservationCount,
    level,
  } = lessonData;

  const translatedGenre = genreMapping[genre as Exclude<GenreTypes, null>] || genre;
  const dDay = getDDayLabel(remainingDays);

  const navigate = useNavigate();

  const handleTeacherClick = (dancerId: number) => {
    const path = ROUTES_CONFIG.dancer.path(dancerId.toString());
    navigate(path);
  };

  return (
    <section className={sprinkles({ flexDirection: 'column', pt: 20, pr: 20, pb: 24, pl: 20 })}>
      <div className={sprinkles({ display: 'flex', mb: 12, gap: 6 })}>
        <Tag type="genre" size="medium">
          <Text tag="b3_m" color="white">
            {translatedGenre}
          </Text>
        </Tag>
        <Tag type="deadline" size="medium">
          <Text tag="b3_m" color="white">
            {dDay}
          </Text>
        </Tag>
      </div>

      <Head level="h2" tag="h5_sb" className={sprinkles({ mb: 18 })}>
        {name}
      </Head>

      <div
        className={sprinkles({ display: 'flex', alignItems: 'center', marginBottom: 8, gap: 9 })}
        onClick={() => handleTeacherClick(teacherId)}>
        <img src={teacherImageUrl} alt={`${teacherNickname} 프로필`} className={styles.profileStyle} />
        <Text tag="b2_m" color="gray9">
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
          mb: 24,
        })}>
        <Head level="h4" tag="h6_sb" color="gray6">
          {lessonRounds.length}회
        </Head>
        <div className={styles.priceTextStyle}>
          <Head level="h5" tag="h3_sb">
            {price.toLocaleString()}
          </Head>
          <Head level="h5" tag="h3_sb">
            원
          </Head>
        </div>
      </div>

      <Card className={styles.cardStyle}>
        <div
          className={sprinkles({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 60,
            gap: 6,
          })}>
          <Text tag="b3_sb" color="gray7">
            난이도
          </Text>
          <Text tag="h6_sb" color="gray10">
            {levelMapping[level]}
          </Text>
        </div>

        <div
          className={sprinkles({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 60,
            gap: 6,
          })}>
          <Text tag="b3_sb" color="gray7">
            인원
          </Text>
          <Text tag="h6_sb" color="gray10">
            {maxReservationCount}명
          </Text>
        </div>

        <div
          className={sprinkles({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 60,
            gap: 6,
          })}>
          <Text tag="b3_sb" color="gray7">
            리뷰
          </Text>
          <div className={styles.reviewTextStyle}>
            <Text tag="h6_sb" color="gray10">
              -
            </Text>
            <Text tag="c1_r" color="gray6" className={styles.reviewSubText}>
              (-)
            </Text>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default ClassInfoWrapper;
