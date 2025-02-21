import Flex from '@/shared/components/Flex/Flex';
import Text from '@/shared/components/Text/Text';
import { calculatePeriod, formatSimpleDate } from '@/shared/utils/dateCalculate';

interface ScheduleItemProps {
  index: number;
  startDateTime: string;
  endDateTime: string;
}

const ScheduleItem = ({ index, startDateTime, endDateTime }: ScheduleItemProps) => {
  const { startTime, formattedEndTime, durationString } = calculatePeriod(startDateTime, endDateTime);

  return (
    <Flex direction="column" gap="0.4rem">
      <Text tag="b7" color="gray10">
        {index + 1}회차: {formatSimpleDate(startDateTime)}
      </Text>
      <Text tag="b7" color="gray6">
        {startTime} - {formattedEndTime} ({durationString})
      </Text>
    </Flex>
  );
};

export default ScheduleItem;
