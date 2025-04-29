import * as styles from '@/pages/reservation/components/ClassInfo/classInfo.css';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { levelMapping } from '@/shared/constants';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import { calculatePeriod, formatSimpleDate } from '@/shared/utils/dateCalculate';

interface ClassInfoPropTypes {
  name: string;
  location: string;
  locationDetail?: string;
  teacherNickname: string;
  level: string;
  lessonRound?: LessonRoundPropTypes[];
}

interface LessonRoundPropTypes {
  startDateTime: string;
  endDateTime: string;
}

const ClassInfo = ({
  name,
  location,
  locationDetail,
  teacherNickname,
  level,
  lessonRound = [],
}: ClassInfoPropTypes) => {
  return (
    <div className={styles.infoContainerStyle}>
      <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 20 })}>
        <Head level="h5" tag="b1_sb">
          {name}
        </Head>
        <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 10 })}>
          <div className={sprinkles({ display: 'flex', gap: 12 })}>
            <Text tag="b3_sb_narrow" color="gray7" className={styles.textLabelStyle}>
              강사
            </Text>
            <Text tag="b3_m" color="gray10">
              {teacherNickname}
            </Text>
          </div>
          <div className={sprinkles({ display: 'flex', gap: 12 })}>
            <Text tag="b3_sb_narrow" color="gray7" className={styles.textLabelStyle}>
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

          <div className={sprinkles({ display: 'flex', gap: 12 })}>
            <Text tag="b3_sb_narrow" color="gray7" className={styles.textLabelStyle}>
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
            <Text tag="b3_sb_narrow" color="gray7" className={styles.textLabelStyle}>
              난이도
            </Text>
            <Text tag="b3_m" color="gray10">
              {levelMapping[level]}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassInfo;
