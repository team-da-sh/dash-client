import Card from '@/pages/class/components/Card';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { roundBox } from './index.css';

const Period = () => {
  const data = [
    {
      round: '1',
      date: '2025년 1월 8일 수요일',
      startTime: '18:00',
      endTime: '20:00',
      duration: '2',
    },
    {
      round: '2',
      date: '2025년 1월 9일 목요일',
      startTime: '14:00',
      endTime: '20:00',
      duration: '2',
    },
    {
      round: '3',
      date: '2025년 1월 10일 금요일',
      startTime: '10:00',
      endTime: '20:00',
      duration: '2',
    },
    {
      round: '4',
      date: '2025년 1월 11일 토요일',
      startTime: '15:00',
      endTime: '20:00',
      duration: '2',
    },
  ];

  return (
    <Flex direction="column" justify="center" gap="1.2rem">
      {data.map((item, index) => (
        <Card key={index}>
          <Flex align="center">
            <div className={roundBox}>
              <Text tag="b10" color="white">
                {item.round}회차
              </Text>
            </div>
            <div>
              <Text tag="b4" color="black">
                {item.date}
              </Text>
              <Text tag="b7" color="gray7">
                {item.startTime} - {item.endTime} (총 {item.duration}시간)
              </Text>
            </div>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default Period;
