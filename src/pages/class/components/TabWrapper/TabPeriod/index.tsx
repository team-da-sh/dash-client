import Card from '@/pages/class/components/Card';
import { roundBoxStyle } from '@/pages/class/components/TabWrapper/TabPeriod/index.css';
import { LessonDetail } from '@/pages/class/types/index';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { calculatePeriod, formatDate } from '@/utils/dateCalculate';

const TabPeriod = ({ lessonData }: { lessonData: LessonDetail }) => {
  const { lessonRound } = lessonData; // lessonRound 객체 가져오기
  const lessonRounds = lessonRound.lessonRounds; // lessonRounds 배열로 수정
 
  return (
    <Flex direction="column" justify="center" gap="1.2rem">
      {lessonRounds.map((item, id) => {
        // lessonRounds 배열 순회
        const { startDateTime, endDateTime } = item; // lessonRound의 startDateTime과 endDateTime 가져오기
        const { startTime, formattedEndTime, durationString } = calculatePeriod(startDateTime, endDateTime); // 기간 계산

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
                    {formatDate(startDateTime)} {/* 시작 날짜 형식 지정 */}
                  </Text>
                  <Text tag="b7" color="gray7">
                    {startTime} - {formattedEndTime} ({durationString}) {/* 시간 및 기간 표시 */}
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
