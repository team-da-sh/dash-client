import Card from '@/pages/class/components/Card';
import { roundBoxStyle } from '@/pages/class/components/TabWrapper/TabPeriod/index.css';
import { LessonDetailApiResponse } from '@/pages/class/types/index';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { calculatePeriod, formatDate } from '@/utils/dateCalculate';

const TabPeriod = ({ lessonData }: { lessonData: LessonDetailApiResponse }) => {
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
                <div>
                  <Text tag="b4" color="black">
                    {formatDate(startDateTime)}
                  </Text>
                  <Text tag="b7" color="gray7">
                    {startTime} - {formattedEndTime} ({durationString})
                  </Text>
                </div>
              </Flex>
            </div>
          </Card>
        );
      })}
    </Flex>
  );
};

export default TabPeriod;
