import Card from '@/pages/class/components/Card/Card';
import * as styles from '@/pages/class/components/TabWrapper/TabPeriod/tabPeriod.css';
import type { LessonDetailResponseTypes } from '@/pages/class/types/api';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import { calculatePeriod, formatDate } from '@/shared/utils/dateCalculate';

const TabPeriod = ({ lessonData }: { lessonData: LessonDetailResponseTypes }) => {
  const { lessonRound } = lessonData;
  const lessonRounds = lessonRound.lessonRounds;

  return (
    <section className={sprinkles({ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 })}>
      {lessonRounds.map((item, id) => {
        const { startDateTime, endDateTime } = item;
        const { startTime, formattedEndTime, durationString } = calculatePeriod(startDateTime, endDateTime);
        return (
          <Card key={id}>
            <div>
              <div className={sprinkles({ display: 'flex', alignItems: 'center', width: '100%' })}>
                <div className={styles.roundBoxStyle}>
                  <Text tag="b3_sb_narrow" color="white">
                    {id + 1}회차
                  </Text>
                </div>
                <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 4 })}>
                  <Text tag="b2_sb" color="black">
                    {formatDate(startDateTime)}
                  </Text>
                  <Text tag="b3_m" color="gray7">
                    {startTime} - {formattedEndTime} ({durationString})
                  </Text>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </section>
  );
};

export default TabPeriod;
