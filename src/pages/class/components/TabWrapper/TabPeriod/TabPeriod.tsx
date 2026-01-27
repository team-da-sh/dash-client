import Card from '@/pages/class/components/Card/Card';
import {
  cardStyle,
  roundBoxStyle,
  sectionStyle,
  cardContentStyle,
  periodInfoStyle,
} from '@/pages/class/components/TabWrapper/TabPeriod/tabPeriod.css';
import type { LessonDetailResponseTypes } from '@/pages/class/types/api';
import Text from '@/common/components/Text/Text';
import { calculatePeriod, formatDateToKR } from '@/shared/utils/date';

const TabPeriod = ({ lessonData }: { lessonData: LessonDetailResponseTypes }) => {
  const { lessonRound } = lessonData;
  const lessonRounds = lessonRound.lessonRounds;

  return (
    <section className={sectionStyle}>
      {lessonRounds.map((item, id) => {
        const { startDateTime, endDateTime } = item;
        const { startTime, formattedEndTime, durationString } = calculatePeriod(startDateTime, endDateTime);
        return (
          <Card key={id} className={cardStyle}>
            <div className={cardContentStyle}>
              <div className={roundBoxStyle}>
                <Text tag="b3_sb_narrow" color="white">
                  {id + 1}회차
                </Text>
              </div>
              <div className={periodInfoStyle}>
                <Text tag="b2_sb" color="black">
                  {formatDateToKR(startDateTime)}
                </Text>
                <Text tag="b3_m" color="gray7">
                  {startTime} - {formattedEndTime} ({durationString})
                </Text>
              </div>
            </div>
          </Card>
        );
      })}
    </section>
  );
};

export default TabPeriod;
