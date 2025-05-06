import {
  addInputBoxStyle,
  scheduleItemContainerStyle,
  tagStyle,
} from '@/pages/instructor/classRegister/components/ClassSchedule/classSchedule.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import IcPlusGray0524 from '@/shared/assets/svg/IcPlusGray0524';
import IcXCircleGray0424 from '@/shared/assets/svg/IcXCircleGray0424';
import Flex from '@/shared/components/Flex/Flex';
import Text from '@/shared/components/Text/Text';
import { calculatePeriod, formatDate } from '@/shared/utils/dateCalculate';

interface TimesTypes {
  startTime: string;
  endTime: string;
  date: string;
  duration: number;
}

interface ClassScheduleProps {
  openBottomSheet: () => void;
  times: TimesTypes[];
  handleRemoveTime: (idx: number) => void;
}

const ClassSchedule = ({ openBottomSheet, times, handleRemoveTime }: ClassScheduleProps) => {
  return (
    <Flex tag="section" direction="column" gap="2rem" width="100%" marginBottom="5rem">
      <Description title="클래스 일정" subTitle="클래스가 진행될 회차별 날짜와 시간을 등록해 주세요" />
      <Flex direction="column" gap="0.8rem" width="100%">
        {times.map((time, idx) => (
          <Flex justify="spaceBetween" align="center" width="100%" className={scheduleItemContainerStyle}>
            <Flex gap="1.6rem" align="center">
              <div className={tagStyle}>{idx + 1}회차</div>
              <Flex direction="column" gap="0.4rem">
                <Text tag="b2_sb"> {formatDate(time.date)}</Text>
                <Text tag="b3_m" color="gray7">
                  {`${calculatePeriod(time.startTime, time.endTime).startTime} ~ ${
                    calculatePeriod(time.startTime, time.endTime).formattedEndTime
                  }`}{' '}
                  (총 {time.duration} 시간)
                </Text>
              </Flex>
            </Flex>
            <IcXCircleGray0424 width={'2.4rem'} onClick={() => handleRemoveTime(idx)} />
          </Flex>
        ))}

        <Flex justify="center" align="center" className={addInputBoxStyle} onClick={openBottomSheet}>
          <IcPlusGray0524 width={'2.4rem'} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ClassSchedule;
