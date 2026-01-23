import { useFormContext } from 'react-hook-form';
import {
  scheduleItemContainerStyle,
  tagStyle,
  addInputBoxStyle,
  containerStyle,
  contentWrapperStyle,
  scheduleListStyle,
  scheduleItemContentStyle,
  scheduleInfoStyle,
  errorMessageStyle,
} from '@/pages/instructor/classRegister/components/ClassSchedule/classSchedule.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import { CLASS_SCHEDULE_SUBTITLE } from '@/pages/instructor/classRegister/constants/registerSectionText';
import type { TimesTypes } from '@/pages/instructor/classRegister/types/classSchedule';
import IcPlusGray0524 from '@/shared/assets/svg/IcPlusGray0524';
import IcXCircleGray0424 from '@/shared/assets/svg/IcXCircleGray0424';
import Text from '@/shared/components/Text/Text';
import { calculatePeriod, formatDate } from '@/shared/utils/dateCalculate';
import { formatDuration } from '@/shared/utils/timeUtils';

interface ClassSchedulePropTypes {
  openBottomSheet: () => void;
  times: TimesTypes[];
  handleRemoveTime: (idx: number) => void;
}

const ClassSchedule = ({ openBottomSheet, times, handleRemoveTime }: ClassSchedulePropTypes) => {
  const {
    formState: { errors },
  } = useFormContext();
  const error = errors.times as { message?: string } | undefined;

  return (
    <div className={containerStyle}>
      <div className={contentWrapperStyle}>
        <Description title="클래스 일정" subTitle={CLASS_SCHEDULE_SUBTITLE} />

        <div className={scheduleListStyle}>
          {times.map((time, idx) => (
            <div key={idx} className={scheduleItemContainerStyle}>
              <div className={scheduleItemContentStyle}>
                <div className={tagStyle}>{idx + 1}회차</div>
                <div className={scheduleInfoStyle}>
                  <Text tag="b2_sb"> {formatDate(time.date)}</Text>
                  <Text tag="b3_m" color="gray7">
                    {`${calculatePeriod(time.startTime, time.endTime).startTime} ~ ${
                      calculatePeriod(time.startTime, time.endTime).formattedEndTime
                    }`}{' '}
                    ({formatDuration(time.duration)})
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
      {error?.message && (
        <div className={errorMessageStyle}>
          <Text tag="b3_r" color="alert3">
            {error.message}
          </Text>
        </div>
      )}
    </div>
  );
};

export default ClassSchedule;
