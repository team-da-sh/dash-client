import { useState } from 'react';
import { usePostPhoneRequest, usePostPhoneVerify } from '@/pages/onboarding/apis/queries';
import * as styles from '@/pages/onboarding/components/InfoStep/infoStep.css';
import {
  INFO_KEY,
  MAX_PHONENUMBER_LENGTH,
  MAX_VERFICATION_CODE,
  REQUEST_DELAY,
  TIMER_DURATION,
} from '@/pages/onboarding/constants';
import { useVerificationTimer } from '@/pages/onboarding/hooks/useVerificationTimer';
import type { OnboardInfoTypes } from '@/pages/onboarding/types/onboardInfoTypes';
import { validateTypingName, validateTypingPhoneNumber } from '@/pages/onboarding/utils/validate';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Head from '@/shared/components/Head/Head';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';
import { notify } from '@/shared/components/Toast/Toast';
import { ApiError } from '@/shared/types/api';

interface InfoStepProps {
  name: string;
  phoneNumber: string;
  verificationCode: string;
  onInfoChange: <K extends keyof OnboardInfoTypes>(key: K, value: OnboardInfoTypes[K]) => void;
  isCodeVerified: boolean;
  setIsCodeVerified: (verified: boolean) => void;
  accessToken: string;
}

const InfoStep = ({
  name,
  phoneNumber,
  verificationCode,
  onInfoChange,
  isCodeVerified,
  setIsCodeVerified,
  accessToken,
}: InfoStepProps) => {
  const { isRunning, formattedTime, startTimer, seconds, resetTimer } = useVerificationTimer(TIMER_DURATION);
  const [isVerificationVisible, setIsVerificationVisible] = useState(false);
  const [requestCount, setRequestCount] = useState(0);

  const { mutate: requestPhoneMutate } = usePostPhoneRequest();
  const { mutate: verifyPhoneMutate } = usePostPhoneVerify();

  const handleNameChange = (name: string) => {
    const validName = validateTypingName(name);
    onInfoChange(INFO_KEY.NAME, validName);
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
    if (isRunning && seconds > TIMER_DURATION - REQUEST_DELAY) {
      notify({ message: '잠시 후 다시 요청해주세요', icon: 'fail', bottomGap: 'large' });
      return;
    }
    if (requestCount >= 5) {
      notify({ message: '인증 요청은 하루에 5회까지만 가능해요', icon: 'fail', bottomGap: 'large' });
      return;
    }

    setRequestCount((prev) => prev + 1);
    
    requestPhoneMutate(
      { phoneNumber, accessToken },
      {
        onSuccess: () => {
          notify({ message: '인증번호가 전송되었습니다', icon: 'success', bottomGap: 'large' });
          onInfoChange(INFO_KEY.VERIFICATION_CODE, '');
          setIsVerificationVisible(true);
          startTimer();
        },
      onError: (error) => {
          if (error.response?.status === 404) {
            notify({ message: '이미 등록된 전화번호에요', icon: 'fail', bottomGap: 'large' });
          } else {
            notify({ message: '인증번호 전송에 실패했어요', icon: 'fail', bottomGap: 'large' });
          }
        },
      }
    );
  };

  const handleVerifyCode = () => {
    verifyPhoneMutate(
      { phoneNumber, code: verificationCode, accessToken },
      {
        onSuccess: () => {
          notify({ message: '인증이 완료되었습니다', icon: 'success', bottomGap: 'large' });
          setIsCodeVerified(true);
          resetTimer();
        },
          onError: (error) => {
           const apiError = error.response?.data as ApiError;
           if (error.response?.status === 409) {
            notify({ message: '인증번호가 일치하지 않아요', icon: 'fail', bottomGap: 'large' });
           } else {
             const message = apiError?.message || '인증에 실패했어요. 다시 시도해주세요.';
             notify({ message, icon: 'fail', bottomGap: 'large' });
           }
          setIsCodeVerified(false);
        },
      }
    );
  };

  const handleFocusAndNotify = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isCodeVerified) return;
    e.preventDefault();
    (e.target as HTMLElement).blur?.();
    notify({ message: '이미 인증이 완료되었어요', icon: 'success', bottomGap: 'large' });
  };

  const isRequestDisabled = phoneNumber.length !== MAX_PHONENUMBER_LENGTH || isCodeVerified;
  const isVerifyButtonDisabled = verificationCode.length !== MAX_VERFICATION_CODE;
  const showAsResend = isRunning || isCodeVerified;

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
              readOnly={isCodeVerified}
              onMouseDown={handleFocusAndNotify}
              onTouchStart={handleFocusAndNotify}
            />
            <BoxButton
              className={styles.buttonStyle({ type: isRunning ? 'resend' : 'default' })}
              isDisabled={isRequestDisabled}
              onClick={handleRequestVerification}>
              {showAsResend ? '재요청' : '인증 요청'}
            </BoxButton>
          </div>
          {isVerificationVisible && (
            <div className={styles.numberWrapperStyle}>
              <Input
                placeholder="인증번호 6자리"
                value={verificationCode}
                onChange={(e) => handleVerificationCodeChange(e.target.value)}
                rightAddOn={
                  <Text tag="b2_m" color="gray8" className={styles.timerStyle}>
                    {formattedTime}
                  </Text>
                }
                readOnly={isCodeVerified}
                onMouseDown={handleFocusAndNotify}
                onTouchStart={handleFocusAndNotify}
              />
              <BoxButton
                className={styles.buttonStyle({ type: 'default' })}
                isDisabled={isVerifyButtonDisabled || isCodeVerified}
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