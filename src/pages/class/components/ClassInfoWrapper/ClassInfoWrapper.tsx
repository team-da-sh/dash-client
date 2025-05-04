import { useNavigate } from 'react-router-dom';
import * as styles from '@/pages/class/components/ClassInfoWrapper/classInfoWrapper.css';
import type { LessonDetailResponseTypes } from '@/pages/class/types/api';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Head from '@/shared/components/Head/Head';
import Tag from '@/shared/components/Tag/Tag';
import Text from '@/shared/components/Text/Text';
import { genreMapping } from '@/shared/constants/index';
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
  } = lessonData;
  const translatedGenre = genreMapping[genre] || genre;

  // D-DAY remaingDays로 통일
  const dDay = remainingDays > 0 ? `D-${remainingDays}` : remainingDays === 0 ? 'D-DAY' : '마감';

  const navigate = useNavigate();

  const handleTeacherClick = (dancerId: number) => {
    const path = ROUTES_CONFIG.dancer.path(dancerId.toString());
    navigate(path);
  };

  return (
    <section className={sprinkles({ flexDirection: 'column', pt: 20, pr: 24, pb: 24, pl: 20 })}>
      <div className={sprinkles({ display: 'flex', mb: 12, gap: 4 })}>
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

      <Head level="h2" tag="h5_sb" className={sprinkles({ mb: 16 })}>
        {name}
      </Head>

      <div
        className={sprinkles({ display: 'flex', alignItems: 'center', marginBottom: 8, gap: 8 })}
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
          mb: 15,
        })}>
        <Head level="h4" tag="h6_sb" color="gray6">
          {lessonRounds.length}회
        </Head>
        <div className={sprinkles({ display: 'flex', alignItems: 'center', gap: 2 })}>
          <Head level="h5" tag="h3_sb">
            {price.toLocaleString()}
          </Head>
          <Head level="h5" tag="h3_sb">
            원
          </Head>
        </div>
      </div>
      <div>
        <p>난이도 인원 리뷰</p>
      </div>
    </section>
  );
};

export default ClassInfoWrapper;
