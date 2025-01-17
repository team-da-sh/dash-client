import InfoRow from '@/pages/reservation/InfoRow';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';
import { vars } from '@/styles/theme.css';
import { MY_RESERVATION_DATA } from '@/mocks/mockMyReservationData';
import ScheduleItem from './ScheduleItem';
import { infoComponentStyle, textLabelStyle } from './index.css';

const InfoComponent = () => {
  const { lessonName, lessonLocation, teacherName, lessonLevel, lessonRound } = MY_RESERVATION_DATA;

  return (
    <div className={infoComponentStyle}>
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
              {lessonRound.map((item, index) => (
                <ScheduleItem
                  key={index}
                  index={index}
                  startDateTime={item.lessonStartDateTime}
                  endDateTime={item.lessonEndDateTime}
                />
              ))}
            </Flex>
          </Flex>

          <InfoRow label="장소" value={lessonLocation} />

          <InfoRow label="난이도" value={lessonLevel} />
        </Flex>
      </Flex>
    </div>
  );
};

export default InfoComponent;
