import * as styles from '@/pages/onboarding/components/InfoStep/infoStep.css';
import { INFO_KEY } from '@/pages/onboarding/constants';
import type { onboardInfoTypes } from '@/pages/onboarding/types/onboardInfoTypes';
import { validateTypingName, validateTypingPhoneNumber } from '@/pages/onboarding/utils/validate';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Head from '@/shared/components/Head/Head';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';

interface InfoStepProps {
  name: string;
  phoneNumber: string;
  onInfoChange: <K extends keyof onboardInfoTypes>(key: K, value: onboardInfoTypes[K]) => void;
}

const InfoStep = ({ name, phoneNumber, onInfoChange }: InfoStepProps) => {
  const handleNameChange = (name: string) => {
    if (!validateTypingName(name)) return;

    onInfoChange(INFO_KEY.NAME, name);
  };

  const handlePhoneNumberChange = (phoneNumber: string) => {
    if (!validateTypingPhoneNumber(phoneNumber)) return;

    onInfoChange(INFO_KEY.PHONE_NUMBER, phoneNumber);
  };

  return (
    <div className={styles.containerStyle}>
      <div className={styles.wrapperStyle}>
        <Head level="h1" tag="h3_sb">
          개인정보 입력
        </Head>
        <Text tag="b2_m" color="gray7">
          앞으로 클래스를 신청할 때 활용될 거예요
        </Text>
      </div>

      <div className={styles.inputWrapperStyle}>
        <div className={styles.wrapperStyle}>
          <Text tag="b2_sb" className={styles.labelStyle}>
            이름
          </Text>
          <Input placeholder="김대쉬" value={name} onChange={(e) => handleNameChange(e.target.value)} />
        </div>
        <div className={styles.wrapperStyle}>
          <Text tag="b2_sb" className={styles.labelStyle}>
            전화번호
          </Text>
          <div className={styles.numberWrapperStyle}>
            <Input
              placeholder="01012345678"
              value={phoneNumber}
              onChange={(e) => handlePhoneNumberChange(e.target.value)}
              className={styles.inputStyle}
            />
            <BoxButton className={styles.buttonStyle} isDisabled={phoneNumber.length !== 11}>
              인증 요청
            </BoxButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoStep;
