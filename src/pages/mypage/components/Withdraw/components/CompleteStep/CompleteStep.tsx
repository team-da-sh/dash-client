import { useId } from 'react';
import {
  containerStyle,
  descriptionStyle,
  boxStyle,
  boxValueStyle,
  buttonContainerStyle,
} from '@/pages/mypage/components/Withdraw/components/CompleteStep/completeStep.css';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { formatToYYYYMMDD } from '@/shared/utils/timeCalculate';
import { getDateWithoutTime } from '@/shared/utils/timeUtils';

interface CompleteStepPropTypes {
  email: string;
  onGoHome: () => void;
}

const CompleteStep = ({ email, onGoHome }: CompleteStepPropTypes) => {
  const titleId = useId();
  const today = formatToYYYYMMDD(getDateWithoutTime(new Date()));

  return (
    <>
      <div className={containerStyle} aria-labelledby={titleId}>
        <Head id={titleId} tag="h3_sb" color="black">
          회원 탈퇴가 완료되었습니다.
          <br />
          서비스를 이용해 주셔서 감사합니다.
        </Head>
        <Text tag="b2_m" color="gray7" className={descriptionStyle}>
          다시 춤추고 싶으실 때, 언제든 이곳을 찾아주세요.
          <br />더 나은 모습으로 회원님을 기다리겠습니다.
        </Text>
        <dl className={boxStyle}>
          <dt>
            <Text as="span" tag="b2_m_long" color="gray6">
              가입 계정
            </Text>
          </dt>
          <dd className={boxValueStyle}>
            <Text tag="b2_m_long" color="black">
              {email}
            </Text>
          </dd>
          <dt>
            <Text as="span" tag="b2_m_long" color="gray6">
              탈퇴 날짜
            </Text>
          </dt>
          <dd>
            <Text tag="b2_m_long" color="black">
              {today}
            </Text>
          </dd>
        </dl>
      </div>
      <div className={buttonContainerStyle}>
        <BoxButton onClick={onGoHome}>홈으로 돌아가기</BoxButton>
      </div>
    </>
  );
};

export default CompleteStep;
