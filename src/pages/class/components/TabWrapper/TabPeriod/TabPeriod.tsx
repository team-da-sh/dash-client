import Card from '@/pages/class/components/Card/Card';
import { roundBoxStyle } from '@/pages/class/components/TabWrapper/TabPeriod/tabPeriod.css';
import { LessonDetailResponse } from '@/pages/class/types/api';
import Flex from '@/shared/components/Flex/Flex';
import Text from '@/shared/components/Text/Text';
import { calculatePeriod, formatDate } from '@/shared/utils/dateCalculate';

const TabPeriod = ({ lessonData }: { lessonData: LessonDetailResponse }) => {
  const { lessonRound } = lessonData;
  const lessonRounds = lessonRound.lessonRounds;

  return (
    <Flex direction="column" justify="center" gap="1.2rem">
      {lessonRounds.map((item, id) => {
        const { startDateTime, endDateTime } = item;
        const { startTime, formattedEndTime, durationString } = calculatePeriod(startDateTime, endDateTime);

        return (
          <Card key={id}>
            <div>
              <Flex align="center" width="100%">
                <div className={roundBoxStyle}>
                  <Text tag="b10" color="white">
                    {id + 1}회차
                  </Text>
                </div>
                <Flex gap="0.4rem" direction="column">
                  <Text tag="b4" color="black">
                    {formatDate(startDateTime)}
                  </Text>
                  <Text tag="b7" color="gray7">
                    {startTime} - {formattedEndTime} ({durationString})
                  </Text>
                </Flex>
              </Flex>
            </div>
          </Card>
        );
      })}
    </Flex>
  );
};

export default TabPeriod;
