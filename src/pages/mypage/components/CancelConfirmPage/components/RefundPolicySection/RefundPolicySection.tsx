import { useState } from 'react';
import {
  containerStyle,
  agreementContainerStyle,
  agreementContainerSelectedStyle,
  contentWrapperStyle,
} from '@/pages/mypage/components/CancelConfirmPage/components/RefundPolicySection/refundPolicySection.css';
import IcCheckcircleGray0524 from '@/shared/assets/svg/IcCheckcircleGray0524';
import IcCheckcircleMain0324 from '@/shared/assets/svg/IcCheckcircleMain0324';
import IcFrame from '@/shared/assets/svg/IcFrame';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { vars } from '@/shared/styles/theme.css';

interface RefundPolicySectionProps {
  isVisible: boolean;
  onAgreementChange: (isAgreed: boolean) => void;
}

const RefundPolicySection = ({ isVisible, onAgreementChange }: RefundPolicySectionProps) => {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleAgreementToggle = () => {
    const newAgreedState = !isAgreed;
    setIsAgreed(newAgreedState);
    onAgreementChange(newAgreedState);
  };

  if (!isVisible) return null;

  return (
    <div className={containerStyle}>
      <div className={contentWrapperStyle}>
        <Head tag="h6_sb" color="black">
          취소 및 환불 약관 안내
        </Head>

        <IcFrame />

        <button
          type="button"
          aria-label="취소 및 환불 약관 동의"
          className={`${agreementContainerStyle} ${isAgreed ? agreementContainerSelectedStyle : ''}`}
          onClick={handleAgreementToggle}>
          {isAgreed ? (
            <IcCheckcircleMain0324 width={24} height={24} />
          ) : (
            <IcCheckcircleGray0524 width={24} height={24} color={vars.colors.gray05} />
          )}
          <Text tag="b1_sb" color={isAgreed ? 'black' : 'gray10'}>
            위 사항을 모두 확인했습니다.
          </Text>
        </button>
      </div>
    </div>
  );
};

export default RefundPolicySection;
