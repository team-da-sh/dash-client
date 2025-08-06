import * as styles from '@/pages/onboarding/components/InfoStep/infoStep.css';
import { INFO_KEY, MAX_PHONENUMBER_LENGTH, MAX_VERFICATION_CODE } from '@/pages/onboarding/constants';
import { useVerificationTimer } from '@/pages/onboarding/hooks/useVerificationTimer';
import type { onboardInfoTypes } from '@/pages/onboarding/types/onboardInfoTypes';
import { validateTypingName, validateTypingPhoneNumber } from '@/pages/onboarding/utils/validate';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Head from '@/shared/components/Head/Head';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';
import { notify } from '@/shared/components/Toast/Toast';

interface InfoStepProps {
  name: string;
  phoneNumber: string;
  verificationCode: string;
  onInfoChange: <K extends keyof onboardInfoTypes>(key: K, value: onboardInfoTypes[K]) => void;
  setIsCodeVerified: (verified: boolean) => void;
}

const InfoStep = ({ name, phoneNumber, verificationCode, onInfoChange, setIsCodeVerified }: InfoStepProps) => {
  const { isRunning: showTimer, formattedTime, startTimer } = useVerificationTimer(300);

  const handleNameChange = (name: string) => {
    if (!validateTypingName(name)) return;

    onInfoChange(INFO_KEY.NAME, name);
  };

  const handlePhoneNumberChange = (phoneNumber: string) => {
    if (!validateTypingPhoneNumber(phoneNumber)) return;

    onInfoChange(INFO_KEY.PHONE_NUMBER, phoneNumber);
  };

  const handleVerificationCodeChange = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, '');
    if (onlyNumbers.length <= MAX_VERFICATION_CODE) {
      onInfoChange(INFO_KEY.VERIFICATION_CODE, onlyNumbers);
    }
  };

  const handleRequestVerification = () => {
    // TODO: 인증 번호 요청 api 연결

    notify({ message: '인증번호가 전송되었습니다', icon: 'success', bottomGap: 'large' });

    onInfoChange(INFO_KEY.VERIFICATION_CODE, '');

    startTimer();
  };

  const handleVerifyCode = () => {
    // TODO: 인증번호 확인 로직, 임시 하드코딩
    const tempCode = '1234';

    if (verificationCode !== tempCode) {
      notify({ message: '인증번호가 일치하지 않아요', icon: 'fail', bottomGap: 'large' });
      setIsCodeVerified(false);
      return;
    }

    notify({ message: '인증이 완료되었습니다', icon: 'success', bottomGap: 'large' });
    setIsCodeVerified(true);
  };

  const isRequestDisabled = name.trim() === '' || phoneNumber.length !== MAX_PHONENUMBER_LENGTH;
  const isVerifyButtonDisabled = verificationCode.length !== MAX_VERFICATION_CODE;

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
            <BoxButton
              className={styles.buttonStyle({ type: showTimer ? 'resend' : 'default' })}
              isDisabled={isRequestDisabled}
              onClick={handleRequestVerification}>
              {showTimer ? '재요청' : '인증 요청'}
            </BoxButton>
          </div>
          {showTimer && (
            <div className={styles.numberWrapperStyle}>
              <Input
                placeholder="인증번호 4자리"
                value={verificationCode}
                onChange={(e) => handleVerificationCodeChange(e.target.value)}
                rightAddOn={
                  <Text tag="b2_m" color="gray8" className={styles.timerStyle}>
                    {formattedTime}
                  </Text>
                }
              />
              <BoxButton
                className={styles.buttonStyle({ type: 'default' })}
                isDisabled={isVerifyButtonDisabled}
                onClick={handleVerifyCode}>
                확인
              </BoxButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoStep;
