import clsx from 'clsx';
import type { GenreTypes } from '@/pages/onboarding/types/genreTypes';
import type { LevelTypes } from '@/pages/onboarding/types/levelTypes';
import * as styles from '@/shared/components/ClassCard/style.css';
import Head from '@/shared/components/Head/Head';
import Tag from '@/shared/components/Tag/Tag';
import Text from '@/shared/components/Text/Text';
import { genreMapping, levelMapping } from '@/shared/constants';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import { formatLessonDateRange } from '@/shared/utils/timeCalculate';

interface ClassCardBodyProps {
  name: string;
  imageUrl: string;
  genre: GenreTypes;
  level: LevelTypes;
  location?: string;
  startDateTime?: string;
  endDateTime?: string;
}

const ClassCardBody = ({ name, imageUrl, genre, level, location, startDateTime, endDateTime }: ClassCardBodyProps) => {
  return (
    <div
      className={sprinkles({
        display: 'flex',
        gap: 12,
      })}>
      <img src={imageUrl} className={styles.cardImageStyle} alt={`${name}`} />
      <div
        className={clsx(
          sprinkles({
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }),
          styles.cardContentStyle
        )}>
        <div className={sprinkles({ display: 'flex', gap: 3 })}>
          {genre && (
            <Tag type="genre" size="small">
              {genreMapping[genre]}
            </Tag>
          )}
          {level && (
            <Tag type="level" size="small">
              {level && levelMapping[level]}
            </Tag>
          )}
        </div>
        <Head level="h2" tag="b1_sb" className={styles.lessonNameStyle}>
          {name}
        </Head>
        <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 4 })}>
          {startDateTime && endDateTime && (
            <div className={sprinkles({ display: 'flex', gap: 8, alignItems: 'center' })}>
              <Text tag="c1_sb" color="gray7">
                일정
              </Text>
              <Text tag="c1_r" color="gray9">
                {formatLessonDateRange(startDateTime, endDateTime)}
              </Text>
            </div>
          )}
          {location && (
            <div className={sprinkles({ display: 'flex', gap: 8, alignItems: 'center' })}>
              <Text tag="c1_sb" color="gray7">
                장소
              </Text>
              <Text tag="c1_r" color="gray9">
                {location || '미정'}
              </Text>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassCardBody;
