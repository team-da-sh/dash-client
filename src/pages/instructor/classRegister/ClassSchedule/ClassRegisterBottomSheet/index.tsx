import ClassRegisterFunnel from '@/pages/instructor/classRegister/ClassSchedule/ClassRegisterFunnel';
import BoxButton from '@/components/BoxButton';
import Header from '@/components/Header';
import { useFunnel } from '@/hooks/useFunnel';
import * as styles from './index.css';

const ClassRegisterBottomSheet = ({ onClose }: { onClose: () => void }) => {
  const TOTAL_STEP = 2;
  const { Funnel, Step, currentStep, setStep } = useFunnel(TOTAL_STEP, '/mypage/class-register');

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

        <ClassRegisterFunnel Funnel={Funnel} Step={Step} currentStep={currentStep} setStep={setStep} />

        <div className={styles.buttonWrapperStyle}>
          {currentStep < TOTAL_STEP ? (
            <BoxButton onClick={() => setStep(1)}>다음</BoxButton>
          ) : (
            <BoxButton
              onClick={() => {
                setStep(1);
                onClose();
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
