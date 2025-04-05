import { infoContainerStyle, textLabelStyle } from '@/pages/reservation/components/ClassInfo/classInfo.css';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { levelMapping } from '@/shared/constants';
import { vars } from '@/shared/styles/theme.css';
import { calculatePeriod, formatSimpleDate } from '@/shared/utils/dateCalculate';

interface ClassInfoPropTypes {
  name: string;
  location: string;
  locationDetail?: string;
  teacherNickname: string;
  level: string;
  lessonRound?: LessonRoundPropTypes[];
}
interface LessonRoundPropTypes {
  startDateTime: string;
  endDateTime: string;
}
const ClassInfo = ({ name, location, locationDetail, teacherNickname, level, lessonRound = [] }: ClassInfoPropTypes) => {
  return (
    <div className={infoContainerStyle}>
      <Flex direction="column" gap="2rem">
        <Head level="h5" tag="h6">
          {name}
        </Head>

        <Flex direction="column" gap="1rem">
          <Flex gap="1.2rem" color="gray08">
            <Text tag="b10" color="gray7" className={textLabelStyle}>
              강사
            </Text>
            <Text tag="b7" color="gray10">
              {teacherNickname}
            </Text>
          </Flex>
          <Flex gap="1.2rem" color={vars.colors.gray08}>
            <Text tag="b10" color="gray7" className={textLabelStyle}>
              일정
            </Text>
            <Flex direction="column" gap="1.2rem">
              {lessonRound.map((round, id) => {
                const { startTime, formattedEndTime, durationString } = calculatePeriod(
                  round.startDateTime,
                  round.endDateTime
                );
                return (
                  <Flex direction="column" gap="0.4rem" key={id}>
                    <Text tag="b7" color="gray10">
                      {id + 1}회차: {formatSimpleDate(round.startDateTime)}
                    </Text>
                    <Text tag="b7" color="gray6">
                      {startTime} - {formattedEndTime} ({durationString})
                    </Text>
                  </Flex>
                );
              })}
            </Flex>
          </Flex>

          <Flex gap="1.2rem" color={vars.colors.gray08}>
            <Text tag="b10" color="gray7" className={textLabelStyle}>
              장소
            </Text>
            <Flex direction="column" gap="0.4rem">
              <Text tag="b7" color="gray10">
                {location ? location : '미정'}
              </Text>
              {locationDetail && (
                <Text tag="b7" color="gray6">
                  {locationDetail}
                </Text>
              )}
            </Flex>
          </Flex>
          <Flex gap="1.2rem" color={vars.colors.gray08}>
            <Text tag="b10" color="gray7" className={textLabelStyle}>
              난이도
            </Text>
            <Text tag="b7" color="gray10">
              {levelMapping[level]}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default ClassInfo;
