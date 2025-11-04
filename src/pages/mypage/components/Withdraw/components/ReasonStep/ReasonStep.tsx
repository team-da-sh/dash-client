import { useState } from 'react';
import {
  containerStyle,
  titleStyle,
  descriptionStyle,
  noteStyle,
  reasonListStyle,
  reasonItemStyle,
  etcGroupStyle,
} from '@/pages/mypage/components/Withdraw/components/ReasonStep/reasonStep.css';
import { REASONS, WithdrawReasonTypes } from '@/pages/mypage/components/Withdraw/constants';
import IcCheckcircleGray0524 from '@/shared/assets/svg/IcCheckcircleGray0524';
import IcCheckcircleMain0324 from '@/shared/assets/svg/IcCheckcircleMain0324';
import BlurButton from '@/shared/components/BlurButton/BlurButton';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';
import { vars } from '@/shared/styles/theme.css';

interface ReasonStepProps {
  onNext: (data: { reasons: WithdrawReasonTypes[]; customReason?: string }) => void;
}

const ReasonStep = ({ onNext }: ReasonStepProps) => {
  const [selectedReasons, setSelectedReasons] = useState<WithdrawReasonTypes[]>([]);
  const [customReason, setCustomReason] = useState('');

  const toggleReason = (reason: WithdrawReasonTypes) => {
    setSelectedReasons((prev) => (prev.includes(reason) ? prev.filter((r) => r !== reason) : [...prev, reason]));
  };

  const isButtonActive = selectedReasons.length > 0;

  const handleNext = () => {
    onNext({
      reasons: selectedReasons,
      customReason: selectedReasons.includes('기타') ? customReason : undefined,
    });
  };

  return (
    <main className={containerStyle}>
      <Text tag="h3_sb" color="black" className={titleStyle}>
        탈퇴하는 이유가 무엇인가요?
      </Text>

      <Text tag="b2_m_long" color="gray9" className={descriptionStyle}>
        서비스를 탈퇴하시려는 이유를 알려주세요. 회원님의
        <br />
        소중한 의견을 바탕으로 더 좋은 서비스를 만들겠습니다.
      </Text>

      <Text tag="b3_r" color="gray8" className={noteStyle}>
        *중복 선택 가능
      </Text>

      <div className={reasonListStyle}>
        {REASONS.map((reason) => {
          const isChecked = selectedReasons.includes(reason);
          const Icon = isChecked ? IcCheckcircleMain0324 : IcCheckcircleGray0524;

          return (
            <div key={reason} className={reason === '기타' ? etcGroupStyle : undefined}>
              <div className={reasonItemStyle} onClick={() => toggleReason(reason)}>
                <Icon width={24} height={24} color={vars.colors.gray03} />
                <Text tag="b2_sb" color="gray9">
                  {reason}
                </Text>
              </div>

              {reason === '기타' && isChecked && (
                <Input
                  placeholder="탈퇴 사유를 작성해 주세요."
                  value={customReason}
                  onChange={(e) => setCustomReason(e.target.value)}
                />
              )}
            </div>
          );
        })}
      </div>

      <BlurButton>
        <BoxButton onClick={handleNext} disabled={!isButtonActive}>
          다음
        </BoxButton>
      </BlurButton>
    </main>
  );
};

export default ReasonStep;
