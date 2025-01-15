import Card from '@/pages/class/Card';
import { roundBox } from '@/pages/class/BottomWrapper/TabPeriod/index.css';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { lessonData } from '@/constants/LessonData';

const Period = () => {
  const { lessonRound } = lessonData;

  // 시간을 계산, "익일" 여부를 판단
  const calculatePeriod = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const startTime = `${startDate.getHours().toString().padStart(2, '0')}:${startDate
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
    const endTime = `${endDate.getHours().toString().padStart(2, '0')}:${endDate
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;

    const isNextDay = endDate.getDate() !== startDate.getDate();
    const formattedEndTime = isNextDay ? `익일 ${endTime}` : endTime;

    const totalMinutes = Math.abs(endDate.getTime() - startDate.getTime()) / 1000 / 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const durationString = minutes > 0 ? `총 ${hours}시간 ${minutes}분` : `총 ${hours}시간`;

    return { startTime, formattedEndTime, durationString };
  };

  // 날짜를 포맷팅 (ex. "2025년 1월 8일 수요일")
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${days[date.getDay()]}`;
  };

  return (
    <Flex direction="column" justify="center" gap="1.2rem">
      {lessonRound.map((item, index) => {
        const { lessonStartDateTime, lessonEndDateTime } = item;
        const { startTime, formattedEndTime, durationString } = calculatePeriod(lessonStartDateTime, lessonEndDateTime);

        return (
          <Card key={index}>
            <Flex align="center">
              <div className={roundBox}>
                <Text tag="b10" color="white">
                  {index + 1}회차
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
          </Card>
        );
      })}
    </Flex>
  );
};

export default Period;
