import type { MouseEvent } from 'react';
import * as styles from '@/pages/instructor/classRegister/components/ClassSchedule/ClassRegisterBottomSheet/classRegisterBottomSheet.css';
import ClassRegisterFunnel from '@/pages/instructor/classRegister/components/ClassSchedule/ClassRegisterFunnel/ClassRegisterFunnel';
import { useLocalFunnel } from '@/pages/instructor/classRegister/hooks/useLocalFunnel';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import { CLASS_REGISTER_TOTAL_STEP } from '@/shared/constants';

interface ClassRegisterBottomSheetPropTypes {
  onClose: () => void;
  startDate: string;
  hour: number;
  minute: number;
  ampm: string;
  setStartDate: (value: string) => void;
  setHour: React.Dispatch<React.SetStateAction<number>>;
  setMinute: React.Dispatch<React.SetStateAction<number>>;
  setAmpm: (value: string) => void;
  setSelectedTime: (value: number | null) => void;
  selectedTime: number | null;
  handleAddTime: () => void;
  times: { startTime: string; endTime: string; date: string; duration: number }[];
}

const ClassRegisterBottomSheet = ({
  onClose,
  startDate,
  hour,
  minute,
  ampm,
  setStartDate,
  setHour,
  setMinute,
  setAmpm,
  setSelectedTime,
  selectedTime,
  handleAddTime,
  times,
}: ClassRegisterBottomSheetPropTypes) => {
  const { Funnel, Step, currentStep, setStep } = useLocalFunnel(CLASS_REGISTER_TOTAL_STEP);

  document.body.style.overflow = 'hidden';

  const resetDateAndTime = () => {
    setStartDate('');
    setHour(12);
    setMinute(0);
    setAmpm('AM');
    setSelectedTime(null);
  };

  const handleSheetComplete = () => {
    setStep(-currentStep + 1);
    document.body.style.overflow = '';
    onClose();
    handleAddTime();
    resetDateAndTime();
  };

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      document.body.style.overflow = '';
      onClose();
      resetDateAndTime();
    }
  };

  return (
    <div className={styles.bottomSheetContainerStyle} onClick={handleOverlayClick}>
      <div className={styles.mainWrapperStyle} onClick={(e) => e.stopPropagation()}>
        <ClassRegisterFunnel
          Funnel={Funnel}
          Step={Step}
          startDate={startDate}
          hour={hour}
          minute={minute}
          ampm={ampm}
          setStartDate={setStartDate}
          setHour={setHour}
          setMinute={setMinute}
          setAmpm={setAmpm}
          setSelectedTime={setSelectedTime}
          selectedTime={selectedTime}
          times={times}
        />

        <div className={styles.buttonWrapperStyle}>
          {currentStep < CLASS_REGISTER_TOTAL_STEP ? (
            <BoxButton onClick={() => setStep(1)} isDisabled={!startDate}>
              다음
            </BoxButton>
          ) : (
            <BoxButton
              isDisabled={!selectedTime}
              onClick={() => {
                handleSheetComplete();
              }}>
              완료
            </BoxButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassRegisterBottomSheet;
