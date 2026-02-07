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
} from '@/app/my/(instructor)/create-class/components/ClassSchedule/classSchedule.css';
import Description from '@/app/my/(instructor)/create-class/components/Description';
import { CLASS_SCHEDULE_SUBTITLE } from '@/app/my/(instructor)/create-class/constants/registerSectionText';
import type { TimesTypes } from '@/app/my/(instructor)/create-class/types/classSchedule';
import Text from '@/common/components/Text/Text';
import IcPlusGray0524 from '@/shared/assets/svg/IcPlusGray0524';
import IcXCircleGray0424 from '@/shared/assets/svg/IcXCircleGray0424';
import { calculatePeriod, formatDateToKR, formatDuration } from '@/shared/utils/date';

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
                  <Text tag="b2_sb"> {formatDateToKR(time.date)}</Text>
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
