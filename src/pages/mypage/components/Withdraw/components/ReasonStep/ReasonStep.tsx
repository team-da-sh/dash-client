import { useId } from 'react';
import {
  containerStyle,
  titleStyle,
  descriptionStyle,
  noteStyle,
  reasonListStyle,
  reasonItemStyle,
  etcGroupStyle,
} from '@/pages/mypage/components/Withdraw/components/ReasonStep/reasonStep.css';
import type { WithdrawReasonTypes } from '@/pages/mypage/components/Withdraw/constants';
import { WITHDRAW_REASONS } from '@/pages/mypage/components/Withdraw/constants';
import IcCheckcircleGray0524 from '@/shared/assets/svg/IcCheckcircleGray0524';
import IcCheckcircleMain0324 from '@/shared/assets/svg/IcCheckcircleMain0324';
import BlurButton from '@/shared/components/BlurButton/BlurButton';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Head from '@/shared/components/Head/Head';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';
import { vars } from '@/shared/styles/theme.css';

interface ReasonStepProps {
  selectedReasons: WithdrawReasonTypes[];
  customReason: string;
  onChangeReasons: (reasons: WithdrawReasonTypes[]) => void;
  onChangeCustomReason: (reason: string) => void;
  onNext: () => void;
}

const ReasonStep = ({
  selectedReasons,
  customReason,
  onChangeReasons,
  onChangeCustomReason,
  onNext,
}: ReasonStepProps) => {
  const toggleReason = (reason: WithdrawReasonTypes) => {
    const updated = selectedReasons.includes(reason)
      ? selectedReasons.filter((r) => r !== reason)
      : [...selectedReasons, reason];
    onChangeReasons(updated);
  };

  const isButtonActive = selectedReasons.length > 0;
  const titleId = useId();

  return (
    <main className={containerStyle} aria-labelledby={titleId}>
      <Head id={titleId} tag="h3_sb" color="black" className={titleStyle}>
        탈퇴하는 이유가 무엇인가요?
      </Head>

      <Text tag="b2_m_long" color="gray9" className={descriptionStyle}>
        서비스를 탈퇴하시려는 이유를 알려주세요. 회원님의
        <br />
        소중한 의견을 바탕으로 더 좋은 서비스를 만들겠습니다.
      </Text>

      <Text tag="b3_r" color="gray8" className={noteStyle}>
        *중복 선택 가능
      </Text>

      <div className={reasonListStyle}>
        {WITHDRAW_REASONS.map((reason) => {
          const isChecked = selectedReasons.includes(reason);
          const Icon = isChecked ? IcCheckcircleMain0324 : IcCheckcircleGray0524;

          return (
            <div key={reason} className={reason === '기타' ? etcGroupStyle : undefined}>
              <button
                className={reasonItemStyle}
                onClick={() => toggleReason(reason)}
                aria-pressed={isChecked}
                aria-label={`탈퇴 이유: ${reason}${isChecked ? ' 선택됨' : ''}`}>
                <Icon width={24} height={24} color={vars.colors.gray03} />
                <Text as="span" tag="b2_sb" color="gray9">
                  {reason}
                </Text>
              </button>

              {reason === '기타' && isChecked && (
                <Input
                  placeholder="탈퇴 사유를 작성해 주세요."
                  value={customReason}
                  onChange={(e) => onChangeCustomReason(e.target.value)}
                  aria-label="기타 탈퇴 사유 입력"
                />
              )}
            </div>
          );
        })}
      </div>

      <BlurButton>
        <BoxButton onClick={onNext} disabled={!isButtonActive}>
          다음
        </BoxButton>
      </BlurButton>
    </main>
  );
};

export default ReasonStep;
