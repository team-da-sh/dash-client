import {
  addInputBoxStyle,
  scheduleItemContainerStyle,
  tagStyle,
} from '@/pages/instructor/classRegister/components/ClassSchedule/classSchedule.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import type { TimesTypes } from '@/pages/instructor/classRegister/types/classSchedule';
import IcPlusGray0524 from '@/shared/assets/svg/IcPlusGray0524';
import IcXCircleGray0424 from '@/shared/assets/svg/IcXCircleGray0424';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import { calculatePeriod, formatDate } from '@/shared/utils/dateCalculate';

interface ClassSchedulePropTypes {
  openBottomSheet: () => void;
  times: TimesTypes[];
  handleRemoveTime: (idx: number) => void;
}

const ClassSchedule = ({ openBottomSheet, times, handleRemoveTime }: ClassSchedulePropTypes) => {
  return (
    <div
      className={sprinkles({
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        mb: 50,
        width: '100%',
      })}>
      <Description title="클래스 일정" subTitle="클래스가 진행될 회차별 날짜와 시간을 등록해 주세요" />

      <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' })}>
        {times.map((time, idx) => (
          <div className={scheduleItemContainerStyle}>
            <div className={sprinkles({ display: 'flex', gap: 16, alignItems: 'center' })}>
              <div className={tagStyle}>{idx + 1}회차</div>
              <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 4 })}>
                <Text tag="b2_sb"> {formatDate(time.date)}</Text>
                <Text tag="b3_m" color="gray7">
                  {`${calculatePeriod(time.startTime, time.endTime).startTime} ~ ${
                    calculatePeriod(time.startTime, time.endTime).formattedEndTime
                  }`}{' '}
                  (총 {time.duration} 시간)
                </Text>
              </div>
            </div>
            <IcXCircleGray0424 width={'2.4rem'} onClick={() => handleRemoveTime(idx)} />
          </div>
        ))}

        <div className={addInputBoxStyle} onClick={openBottomSheet}>
          <IcPlusGray0524 width={'2.4rem'} />
        </div>
      </div>
    </div>
  );
};

export default ClassSchedule;
