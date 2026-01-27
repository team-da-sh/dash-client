import clsx from 'clsx';
import type { GenreTypes } from '@/pages/onboarding/types/genreTypes';
import type { LevelTypes } from '@/pages/onboarding/types/levelTypes';
import Head from '@/common/components/Head/Head';
import Tag from '@/common/components/Tag/Tag';
import Text from '@/common/components/Text/Text';
import IcCircleCautionFilled from '@/shared/assets/svg/IcCircleCautionFilled';
import {
  cardStyle,
  cardImageStyle,
  cardContentStyle,
  lessonNameStyle,
  cardContentWrapperStyle,
  tagWrapperStyle,
  infoWrapperStyle,
  infoRowStyle,
} from '@/shared/components/ClassCard/style.css';
import { genreMapping, levelMapping } from '@/shared/constants';
import { formatLessonDateRange } from '@/shared/utils/timeCalculate';

interface ClassCardBodyProps {
  name: string;
  imageUrl: string;
  genre: GenreTypes;
  level: LevelTypes;
  location?: string;
  startDateTime?: string;
  endDateTime?: string;
  onClick?: () => void;
}

const ClassCardBody = ({
  name,
  imageUrl,
  genre,
  level,
  location,
  startDateTime,
  endDateTime,
  onClick,
}: ClassCardBodyProps) => {
  return (
    <div className={cardStyle} onClick={onClick}>
      {imageUrl ? (
        <img src={imageUrl} className={cardImageStyle} alt={`${name}`} />
      ) : (
        <div className={cardImageStyle}>
          <IcCircleCautionFilled width={36} height={36} />
        </div>
      )}
      <div className={clsx(cardContentWrapperStyle, cardContentStyle)}>
        <div className={tagWrapperStyle}>
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
        <Head level="h2" tag="b1_sb" className={lessonNameStyle}>
          {name}
        </Head>
        <div className={infoWrapperStyle}>
          {startDateTime && endDateTime && (
            <div className={infoRowStyle}>
              <Text tag="c1_sb" color="gray7">
                일정
              </Text>
              <Text tag="c1_r" color="gray9">
                {formatLessonDateRange(startDateTime, endDateTime)}
              </Text>
            </div>
          )}

          <div className={infoRowStyle}>
            <Text tag="c1_sb" color="gray7">
              장소
            </Text>
            <Text tag="c1_r" color="gray9">
              {location || '미정'}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCardBody;
