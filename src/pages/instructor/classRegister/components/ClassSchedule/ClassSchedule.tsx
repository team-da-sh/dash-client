import * as styles from '@/pages/instructor/classRegister/components/ClassSchedule/classSchedule.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import { CLASS_SCHEDULE_SUBTITLE } from '@/pages/instructor/classRegister/constants/registerSectionText';
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
  error?: { message?: string };
}

const ClassSchedule = ({ openBottomSheet, times, handleRemoveTime, error }: ClassSchedulePropTypes) => {
  return (
    <div
      className={sprinkles({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        mb: 50,
      })}>
      <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 20 })}>
        <Description title="클래스 일정" subTitle={CLASS_SCHEDULE_SUBTITLE} />

        <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' })}>
          {times.map((time, idx) => (
            <div key={idx} className={styles.scheduleItemContainerStyle}>
              <div className={sprinkles({ display: 'flex', gap: 16, alignItems: 'center' })}>
                <div className={styles.tagStyle}>{idx + 1}회차</div>
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

          <div className={styles.addInputBoxStyle} onClick={openBottomSheet}>
            <IcPlusGray0524 width={'2.4rem'} />
          </div>
        </div>
      </div>
      {error?.message && (
        <div className={sprinkles({ mt: 4 })}>
          <Text tag="b3_r" color="alert3">
            {error.message}
          </Text>
        </div>
      )}
    </div>
  );
};

export default ClassSchedule;
