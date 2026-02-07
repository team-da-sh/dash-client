'use client';

import {
  flexCustomStyle,
  successButtonContainer,
  sectionStyle,
} from '@/app/class/[id]/register/components/SuccessStep/successStep.css';
import BoxButton from '@/common/components/BoxButton/BoxButton';
import Completion from '@/shared/components/Completion/Completion';

interface SuccessStepPropTypes {
  onGoHome: () => void;
}

const SuccessStep = ({ onGoHome }: SuccessStepPropTypes) => {
  return (
    <main className={flexCustomStyle}>
      <section className={sectionStyle}>
        <Completion
          title="이제 거의 다 왔어요!"
          subTitle="함께 리듬 탈 준비 됐나요?"
          description="강사가 입금 확인 후 신청이 확정될 예정이에요"
        />
      </section>
      <div className={successButtonContainer}>
        <BoxButton onClick={onGoHome}>신청내역으로 이동</BoxButton>
      </div>
    </main>
  );
};

export default SuccessStep;
