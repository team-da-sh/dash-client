import * as styles from '@/pages/instructor/classRegister/components/ClassSchedule/ClassRegisterBottomSheet/classRegisterBottomSheet.css';
import ClassRegisterFunnel from '@/pages/instructor/classRegister/components/ClassSchedule/ClassRegisterFunnel/ClassRegisterFunnel';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Header from '@/shared/components/Header/Header';
import { CLASS_REGISTER_TOTAL_STEP } from '@/shared/constants';
import { useFunnel } from '@/shared/hooks/useFunnel';

interface ClassRegisterBottomSheetProps {
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
}: ClassRegisterBottomSheetProps) => {
  const { Funnel, Step, currentStep, setStep } = useFunnel(
    CLASS_REGISTER_TOTAL_STEP,
    `${ROUTES_CONFIG.classRegister}`,
    false // 완료 페이지 없음 (false)
  );

  const handleSheetComplete = () => {
    setStep(1);
    onClose();
    handleAddTime();
    handleDateAndTimeReset();
  };

  const handleDateAndTimeReset = () => {
    setStartDate('');
    setHour(12);
    setMinute(0);
    setAmpm('AM');
  };

  const handleBackClick = () => {
    if (currentStep === 1) {
      onClose();
    } else {
      setStep(-1);
    }
  };

  return (
    <div className={styles.bottomSheetContainerStyle}>
      <div className={styles.mainWrapperStyle}>
        <Header.Root isColor={true} className={styles.headerStyle}>
          <Header.BackIcon onFunnelBackClick={handleBackClick} />
          <Header.Title title={currentStep === 1 ? '날짜 선택' : '시간 선택'} />
        </Header.Root>

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
