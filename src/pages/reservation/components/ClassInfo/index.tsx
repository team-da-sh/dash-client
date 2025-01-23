import ScheduleItem from '@/pages/reservation/components/ClassInfo/ScheduleItem';
import { infoContainerStyle, textLabelStyle } from '@/pages/reservation/components/ClassInfo/index.css';
import InfoRow from '@/pages/reservation/components/InfoRow';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';
import { vars } from '@/styles/theme.css';
import { levelMapping } from '@/constants';

interface LessonRoundProps {
  startDateTime: string;
  endDateTime: string;
}

interface ClassInfoProps {
  lessonName: string;
  lessonLocation: string;
  teacherName: string;
  lessonLevel: string;
  lessonRound: LessonRoundProps[];
}

const ClassInfo = ({ lessonName, lessonLocation, teacherName, lessonLevel, lessonRound }: ClassInfoProps) => {
  return (
    <div className={infoContainerStyle}>
      <Flex direction="column" gap="2rem">
        <Head level="h5" tag="h6">
          {lessonName}
        </Head>

        <Flex direction="column" gap="1rem">
          <InfoRow label="강사" value={teacherName} />

          <Flex gap="1.2rem" color={vars.colors.gray08}>
            <Text tag="b10" color="gray7" className={textLabelStyle}>
              일정
            </Text>
            <Flex direction="column" gap="1.2rem">
              {lessonRound.map(({ startDateTime, endDateTime }, id) => (
                <ScheduleItem key={id} index={id} startDateTime={startDateTime} endDateTime={endDateTime} />
              ))}
            </Flex>
          </Flex>

          <InfoRow label="장소" value={lessonLocation} />

          <InfoRow label="난이도" value={levelMapping[lessonLevel]} />
        </Flex>
      </Flex>
    </div>
  );
};

export default ClassInfo;
