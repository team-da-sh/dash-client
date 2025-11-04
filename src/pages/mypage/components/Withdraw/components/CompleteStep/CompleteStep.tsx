import {
  containerStyle,
  descriptionStyle,
  boxStyle,
  boxValueStyle,
  buttonContainerStyle,
} from '@/pages/mypage/components/Withdraw/components/CompleteStep/completeStep.css';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Text from '@/shared/components/Text/Text';

interface CompleteStepPropTypes {
  onGoHome: () => void;
}

const CompleteStep = ({ onGoHome }: CompleteStepPropTypes) => {
  return (
    <main>
      <div className={containerStyle}>
        <Text tag="h3_sb" color="black">
          회원 탈퇴가 완료되었습니다.
          <br />
          서비스를 이용해 주셔서 감사합니다.
        </Text>
        <Text tag="b2_m" color="gray7" className={descriptionStyle}>
          <p>언제든 다시 춤추고 싶으실 때, 다시 찾아주세요!</p>
          <p>더 나은 모습으로 회원님을 기다리겠습니다.</p>
        </Text>
        <div className={boxStyle}>
          <Text tag="b2_m_long" color="gray6">
            가입 계정
          </Text>
          <Text tag="b2_m_long" color="black" className={boxValueStyle}>
            Dash@naver.com
          </Text>
          <Text tag="b2_m_long" color="gray6">
            탈퇴 날짜
          </Text>
          <Text tag="b2_m_long" color="black">
            2025-10-28
          </Text>
        </div>
      </div>
      <div className={buttonContainerStyle}>
        <BoxButton onClick={onGoHome}>홈으로 돌아가기</BoxButton>
      </div>
    </main>
  );
};

export default CompleteStep;
