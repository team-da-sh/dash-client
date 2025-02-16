import TimeControl from '@/pages/instructor/classRegister/components/ClassSchedule/TimeStep/TimeControl/TimeControl';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import Tag from '@/shared/components/Tag/Tag';
import { TIME_RANGE } from '@/shared/constants';
import { decreaseHour, decreaseMinute, increaseHour, increaseMinute, toggleAmpm } from '@/shared/utils/timeUtils';

interface TimeStepProps {
  hour: number;
  minute: number;
  ampm: string;
  setHour: React.Dispatch<React.SetStateAction<number>>;
  setMinute: React.Dispatch<React.SetStateAction<number>>;
  setAmpm: (value: string) => void;
  setSelectedTime: (value: number | null) => void;
  selectedTime: number | null;
}

const TimeStep = ({
  hour,
  minute,
  ampm,
  setHour,
  setMinute,
  setAmpm,
  setSelectedTime,
  selectedTime,
}: TimeStepProps) => {
  const handleTagClick = (id: number) => {
    setSelectedTime(selectedTime === id ? null : id);
  };

  return (
    <Flex direction="column">
      <Head level="h2" tag="h6">
        클래스 시작 시간
      </Head>

      <Flex justify="center" gap="1rem" paddingTop="1.6rem" paddingBottom="2.4rem" width="100%">
        <TimeControl
          label="hour"
          value={hour}
          onIncrease={() => setHour(increaseHour(hour))}
          onDecrease={() => setHour(decreaseHour(hour))}
        />
        <TimeControl
          label="minute"
          value={minute}
          onIncrease={() => setMinute(increaseMinute({ currentMinute: minute, setHour }))}
          onDecrease={() => setMinute(decreaseMinute({ currentMinute: minute, setHour }))}
        />
        <TimeControl
          label="ampm"
          value={ampm}
          onIncrease={() => setAmpm(toggleAmpm(ampm))}
          onDecrease={() => setAmpm(toggleAmpm(ampm))}
        />
      </Flex>
      <Head level="h2" tag="h6">
        클래스 진행 시간
      </Head>

      <Flex wrap="wrap" gap="0.8rem" paddingTop="1.6rem">
        {TIME_RANGE.map((time) => (
          <Tag
            key={time.id}
            size="timeSelector"
            isSelected={selectedTime === time.id}
            onClick={() => handleTagClick(time.id)}>
            {time.label}
          </Tag>
        ))}
      </Flex>
    </Flex>
  );
};

export default TimeStep;
