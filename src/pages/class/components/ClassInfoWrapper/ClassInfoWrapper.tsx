import { useNavigate } from 'react-router-dom';
import Card from '@/pages/class/components/Card/Card';
import {
  cardItemStyle,
  cardStyle,
  classTitle,
  priceTextStyle,
  priceWrapper,
  profileStyle,
  reviewSubText,
  reviewTextStyle,
  sectionContainer,
  tagWrapper,
  teacherWrapper,
} from '@/pages/class/components/ClassInfoWrapper/classInfoWrapper.css';
import type { LessonDetailResponseTypes } from '@/pages/class/types/api';
import { getDDayLabel } from '@/pages/class/utils/dDay';
import type { GenreTypes } from '@/pages/onboarding/types/genreTypes';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Head from '@/shared/components/Head/Head';
import Tag from '@/shared/components/Tag/Tag';
import Text from '@/shared/components/Text/Text';
import { levelMapping, genreMapping } from '@/shared/constants/index';

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

  const MAX_DISPLAY_RESERVATION_COUNT = 999;

  return (
    <section className={sectionContainer} aria-label={`${name} 클래스 정보`}>
      <div className={tagWrapper}>
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

      <Head level="h2" tag="h5_sb" className={classTitle}>
        {name}
      </Head>

      <div>
        <button className={teacherWrapper} onClick={() => handleTeacherClick(teacherId)}>
          <img src={teacherImageUrl} alt={`${teacherNickname} 프로필`} className={profileStyle} />
          <Text as="span" tag="b1_sb" color="gray9">
            {teacherNickname}
          </Text>
        </button>
      </div>

      <div className={priceWrapper}>
        <Head level="h4" tag="h6_sb" color="gray6">
          {lessonRounds.length}회
        </Head>
        <div className={priceTextStyle}>
          <Head level="h5" tag="h3_sb">
            {price.toLocaleString()}
          </Head>
          <Head level="h5" tag="h3_sb">
            원
          </Head>
        </div>
      </div>

      <Card className={cardStyle}>
        <div className={cardItemStyle}>
          <Text tag="b3_sb" color="gray7">
            난이도
          </Text>
          <Text tag="h6_sb" color="gray10">
            {levelMapping[level]}
          </Text>
        </div>

        <div className={cardItemStyle}>
          <Text tag="b3_sb" color="gray7">
            인원
          </Text>
          <Text tag="h6_sb" color="gray10">
            <Text as="span" tag="h6_sb" color="gray10">
              {maxReservationCount > MAX_DISPLAY_RESERVATION_COUNT
                ? `${MAX_DISPLAY_RESERVATION_COUNT}+`
                : `${maxReservationCount}명`}
            </Text>
          </Text>
        </div>

        <div className={cardItemStyle}>
          <Text tag="b3_sb" color="gray7">
            리뷰
          </Text>
          <div className={reviewTextStyle}>
            <Text tag="h6_sb" color="gray10">
              -
            </Text>
            <Text tag="c1_r" color="gray6" className={reviewSubText}>
              (-)
            </Text>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default ClassInfoWrapper;
