import * as styles from '@/pages/reservation/components/SuccessStep/successStep.css';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Completion from '@/shared/components/Completion/Completion';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface SuccessStepPropTypes {
  onGoHome: () => void;
}

const SuccessStep = ({ onGoHome }: SuccessStepPropTypes) => {
  return (
    <main className={styles.flexCustomStyle}>
      <section
        className={sprinkles({
          display: 'flex',
          flexDirection: 'column',
          pl: 20,
          pr: 20,
          width: '100%',
        })}>
        <Completion
          title="이제 거의 다 왔어요!"
          subTitle="함께 리듬 탈 준비 됐나요?"
          description="강사가 입금 확인 후 신청이 확정될 예정이에요"
        />
      </section>
      <div className={styles.successButtonContainer}>
        <BoxButton onClick={onGoHome}>신청내역으로 이동</BoxButton>
      </div>
    </main>
  );
};

export default SuccessStep;
