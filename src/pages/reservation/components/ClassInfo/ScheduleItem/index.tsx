import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { ScheduleItemProps } from "@/pages/reservation/types";
import { calculatePeriod, formatSimpleDate } from '@/utils/dateCalculate';

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
