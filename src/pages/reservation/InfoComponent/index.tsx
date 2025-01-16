import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';
import { calculatePeriod, formatSimpleDate } from '@/utils/dateCalculate';
import { vars } from '@/styles/theme.css';
import { RESERVATION_DATA } from '@/mocks/mockReservationData';

const InfoComponent = () => {
  const { lessonName, lessonLocation, teacherName, lessonLevel, lessonRound } = RESERVATION_DATA; // 첫 번째 데이터 접근

  return (
    <div
      style={{
        background: vars.colors.white,
        borderRadius: '4px',
        padding: '2rem',
        width: '100%',
        margin: '0 auto',
      }}>
      <Flex direction="column" gap="2rem">
        <Head level="h5" tag="h6">
          {lessonName}
        </Head>

        <Flex direction="column" gap="1rem">
          {/* 강사 정보 */}
          <Flex gap="1.2rem" color={vars.colors.gray08}>
            <Text tag="b10" color="gray7" style={{ width: '4.4rem' }}>
              강사
            </Text>
            <Text tag="b7" color="gray10">
              {teacherName}
            </Text>
          </Flex>

          {/* 일정 */}
          <Flex gap="1.2rem" color={vars.colors.gray08}>
            <Text tag="b10" color="gray7" style={{ width: '4.4rem' }}>
              일정
            </Text>
            <Flex direction="column" gap="1.2rem">
              {lessonRound.map((item, index) => {
                const { lessonStartDateTime, lessonEndDateTime } = item;
                const { startTime, formattedEndTime, durationString } = calculatePeriod(
                  lessonStartDateTime,
                  lessonEndDateTime
                );

                return (
                  <Flex key={index} direction="column" gap="0.4rem">
                    <Text tag="b7" color="gray10">
                      {index + 1}회차: {formatSimpleDate(lessonStartDateTime)}
                    </Text>
                    <Text tag="b7" color="gray6">
                      {startTime} - {formattedEndTime} ({durationString})
                    </Text>
                  </Flex>
                );
              })}
            </Flex>
          </Flex>

          {/* 장소 */}
          <Flex gap="1.2rem" color={vars.colors.gray08}>
            <Text tag="b10" color="gray7" style={{ width: '4.4rem' }}>
              장소
            </Text>
            <Text tag="b7" color="gray10">
              {lessonLocation}
            </Text>
          </Flex>

          {/* 난이도 */}
          <Flex gap="1.2rem" color={vars.colors.gray08}>
            <Text tag="b10" color="gray7" style={{ width: '4.4rem' }}>
              난이도
            </Text>
            <Text tag="b7" color="gray10">
              {lessonLevel}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default InfoComponent;
