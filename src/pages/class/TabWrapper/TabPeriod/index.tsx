import Card from '@/pages/class/Card';
import { roundBoxStyle } from '@/pages/class/TabWrapper/TabPeriod/index.css';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { calculatePeriod, formatDate } from '@/utils/dateCalculate';
import { LESSON_DATA } from '@/mocks/mockLessonData';

const Period = () => {
  const { lessonRound } = LESSON_DATA;

  return (
    <Flex direction="column" justify="center" gap="1.2rem">
      {lessonRound.map((item, id) => {
        const { lessonStartDateTime, lessonEndDateTime } = item;
        const { startTime, formattedEndTime, durationString } = calculatePeriod(lessonStartDateTime, lessonEndDateTime);

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
                    {formatDate(lessonStartDateTime)}
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

export default Period;
