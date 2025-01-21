import { useState } from 'react';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { increaseHour, decreaseHour, increaseMinute, decreaseMinute, toggleAmpm } from '@/utils/timeUtils';
import TimeControl from './TimeSelector';

const TimeStep = () => {
  const [hour, setHour] = useState(12); // 초기값 12시
  const [minute, setMinute] = useState(0); // 00분
  const [ampm, setAmpm] = useState('AM'); // AM/PM

  return (
    <Flex direction="column" paddingLeft="2rem" paddingRight="2rem">
      <Head level="h2" tag="h6">
        클래스 시작 시간
      </Head>
      <Flex justify="center" gap="1rem" paddingTop="1.6rem" paddingBottom="2.4rem">
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
    </Flex>
  );
};

export default TimeStep;
