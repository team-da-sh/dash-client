import {
  textLabelStyle,
  lessonNameStyle,
  cardImageStyle,
  infoContainerStyle,
} from '@/pages/mypage/components/mypageReservationDetail/components/ClassInfo/ClassInfo.css';
import Head from '@/shared/components/Head/Head';
import Tag from '@/shared/components/Tag/Tag';
import Text from '@/shared/components/Text/Text';
import { genreMapping, levelMapping } from '@/shared/constants';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import { calculatePeriod, formatSimpleDate } from '@/shared/utils/dateCalculate';

interface ClassInfoPropTypes {
  name: string;
  genre: string;
  location: string;
  locationDetail?: string;
  level: string;
  lessonRound?: LessonRoundPropTypes[];
}

interface LessonRoundPropTypes {
  startDateTime: string;
  endDateTime: string;
}

const ClassInfo = ({ name, genre, location, locationDetail, level, lessonRound = [] }: ClassInfoPropTypes) => {
  return (
    <section className={infoContainerStyle}>
      <div className={sprinkles({ display: 'flex', gap: 8 })}>
        <img className={cardImageStyle} alt="수업" />
        <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 8 })}>
          <div className={sprinkles({ display: 'flex', gap: 3 })}>
            <Tag type="genre" size="small">
              {genre && genreMapping[genre]}
            </Tag>
            <Tag type="level" size="small">
              {level && levelMapping[level]}
            </Tag>
          </div>
          <Head level="h2" tag="b1_sb" className={lessonNameStyle}>
            {name}
          </Head>
        </div>
      </div>

      <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 12 })}>
        <div className={sprinkles({ display: 'flex', gap: 12 })}>
          <Text tag="b3_sb_narrow" color="gray7" className={textLabelStyle}>
            장소
          </Text>
          <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 4 })}>
            <Text tag="b3_m" color="gray10">
              {location ? location : '미정'}
            </Text>
            {locationDetail && (
              <Text tag="b3_m" color="gray6">
                {locationDetail}
              </Text>
            )}
          </div>
        </div>

        <div className={sprinkles({ display: 'flex', gap: 12 })}>
          <Text tag="b3_sb_narrow" color="gray7" className={textLabelStyle}>
            일정
          </Text>
          <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 12 })}>
            {lessonRound.map((round, id) => {
              const { startTime, formattedEndTime, durationString } = calculatePeriod(
                round.startDateTime,
                round.endDateTime
              );
              return (
                <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 4 })} key={id}>
                  <Text tag="b3_m" color="gray10">
                    {id + 1}회차: {formatSimpleDate(round.startDateTime)}
                  </Text>
                  <Text tag="b3_m" color="gray6">
                    {startTime} - {formattedEndTime} ({durationString})
                  </Text>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassInfo;
