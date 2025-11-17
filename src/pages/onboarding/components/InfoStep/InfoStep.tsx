import { useState } from 'react';
import { usePostPhoneRequest, usePostPhoneVerify } from '@/pages/onboarding/apis/queries';
import {
  buttonStyle,
  containerStyle,
  inputStyle,
  inputWrapperStyle,
  labelStyle,
  numberWrapperStyle,
  timerStyle,
  wrapperStyle,
} from '@/pages/onboarding/components/InfoStep/infoStep.css';
import { INFO_KEY } from '@/pages/onboarding/constants';
import type { OnboardInfoTypes } from '@/pages/onboarding/types/onboardInfoTypes';
import { validateTypingPhoneNumber } from '@/pages/onboarding/utils/validate';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Head from '@/shared/components/Head/Head';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';
import { notify } from '@/shared/components/Toast/Toast';
import { ONLY_KOREAN_AND_ENGLISH } from '@/shared/constants/regex';
import {
  MAX_PHONENUMBER_LENGTH,
  MAX_VERIFICATION_CODE,
  MIN_NAME_LENGTH,
  NAME_ERROR_MESSAGES,
  PHONE_AUTH_MESSAGES,
  REQUEST_DELAY,
  TIMER_DURATION,
} from '@/shared/constants/userInfo';
import { useVerificationTimer } from '@/shared/hooks/useVerificationTimer';

interface InfoStepProps {
  name: string;
  phoneNumber: string;
  verificationCode: string;
  onInfoChange: <K extends keyof OnboardInfoTypes>(key: K, value: OnboardInfoTypes[K]) => void;
  isCodeVerified: boolean;
  setIsCodeVerified: (verified: boolean) => void;
  accessToken: string;
  isNameError: boolean;
  handleNameErrorChange: (isError: boolean) => void;
}

const InfoStep = ({
  name,
  phoneNumber,
  verificationCode,
  onInfoChange,
  isCodeVerified,
  setIsCodeVerified,
  accessToken,
  isNameError,
  handleNameErrorChange,
}: InfoStepProps) => {
  const { isRunning, formattedTime, startTimer, seconds, resetTimer } = useVerificationTimer(TIMER_DURATION);
  const [isVerificationVisible, setIsVerificationVisible] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');

  const { mutate: requestPhoneMutate } = usePostPhoneRequest();
  const { mutate: verifyPhoneMutate } = usePostPhoneVerify();

  const handleNameChange = (name: string) => {
    if (ONLY_KOREAN_AND_ENGLISH.test(name)) {
      handleNameErrorChange(true);
      setNameErrorMessage(NAME_ERROR_MESSAGES.ONLY_KOREAN_AND_ENGLISH);
    } else if (name.length === 0 || name.length < MIN_NAME_LENGTH) {
      handleNameErrorChange(true);
      setNameErrorMessage(NAME_ERROR_MESSAGES.TOO_SHORT);
    } else {
      handleNameErrorChange(false);
      setNameErrorMessage('');
    }

    onInfoChange(INFO_KEY.NAME, name);
  };

  const handlePhoneNumberChange = (phoneNumber: string) => {
    if (!validateTypingPhoneNumber(phoneNumber)) return;
    onInfoChange(INFO_KEY.PHONE_NUMBER, phoneNumber);
  };

  const handleVerificationCodeChange = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, '');
    if (onlyNumbers.length <= MAX_VERIFICATION_CODE) {
      onInfoChange(INFO_KEY.VERIFICATION_CODE, onlyNumbers);
    }
  };
  const isApproachingTimerEnd = seconds > TIMER_DURATION - REQUEST_DELAY;
  const shouldSendRequest = isRunning && isApproachingTimerEnd;

  const handleRequestVerification = () => {
    if (shouldSendRequest) {
      notify({ message: PHONE_AUTH_MESSAGES.TRY_AGAIN, icon: 'fail', bottomGap: 'large' });
      return;
    }

    requestPhoneMutate(
      { phoneNumber, accessToken },
      {
        onSuccess: () => {
          notify({ message: PHONE_AUTH_MESSAGES.CODE_SENT, icon: 'success', bottomGap: 'large' });
          onInfoChange(INFO_KEY.VERIFICATION_CODE, '');
          setIsVerificationVisible(true);
          startTimer();
        },
        onError: (error) => {
          if (error.response?.status === 400) {
            notify({ message: PHONE_AUTH_MESSAGES.LIMIT_EXCEEDED, icon: 'fail', bottomGap: 'large' });
          } else if (error.response?.status === 404) {
            notify({ message: PHONE_AUTH_MESSAGES.DUPLICATE_PHONE, icon: 'fail', bottomGap: 'large' });
          } else {
            notify({ message: PHONE_AUTH_MESSAGES.SEND_FAILED, icon: 'fail', bottomGap: 'large' });
          }
        },
      }
    );
  };

  const handleVerifyCode = () => {
    verifyPhoneMutate(
      { phoneNumber, code: verificationCode, accessToken },
      {
        onSuccess: (data) => {
          if (!data) return;

          if (data.success) {
            notify({ message: PHONE_AUTH_MESSAGES.VERIFIED_SUCCESS, icon: 'success', bottomGap: 'large' });
            setIsCodeVerified(true);
            resetTimer();
            return;
          }
          notify({ message: PHONE_AUTH_MESSAGES.CODE_MISMATCH, icon: 'fail', bottomGap: 'large' });
          setIsCodeVerified(false);
        },
        onError: (error) => {
          if (error.response?.status === 409) {
            notify({ message: PHONE_AUTH_MESSAGES.CODE_MISMATCH, icon: 'fail', bottomGap: 'large' });
          } else {
            const message = error.response?.data?.message || PHONE_AUTH_MESSAGES.TRY_AGAIN;
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
    notify({ message: PHONE_AUTH_MESSAGES.ALREADY_VERIFIED, icon: 'success', bottomGap: 'large' });
  };

  const isRequestDisabled = phoneNumber.length !== MAX_PHONENUMBER_LENGTH || isCodeVerified;
  const isVerifyButtonDisabled = verificationCode.length !== MAX_VERIFICATION_CODE;
  const showAsResend = isRunning || isCodeVerified;

  return (
    <div className={containerStyle}>
      <div className={wrapperStyle}>
        <Head level="h1" tag="h3_sb">
          개인정보 입력
        </Head>
        <Text tag="b2_m" color="gray7">
          앞으로 클래스를 신청할 때 활용될 거예요
        </Text>
      </div>

      <div className={inputWrapperStyle}>
        <div className={wrapperStyle}>
          <Text tag="b2_sb" className={labelStyle}>
            이름
          </Text>
          <Input
            placeholder="김대쉬"
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
            showMaxLength={true}
            maxLength={8}
            isError={isNameError}
            helperText={nameErrorMessage}
          />
        </div>
        <div className={wrapperStyle}>
          <Text tag="b2_sb" className={labelStyle}>
            전화번호
          </Text>
          <div className={numberWrapperStyle}>
            <Input
              placeholder="01012345678"
              value={phoneNumber}
              onChange={(e) => handlePhoneNumberChange(e.target.value)}
              className={inputStyle}
              readOnly={isCodeVerified}
              onClick={isCodeVerified ? handleFocusAndNotify : undefined}
            />

            <BoxButton
              className={buttonStyle({ type: isRunning ? 'resend' : 'default' })}
              isDisabled={isRequestDisabled}
              onClick={handleRequestVerification}>
              {showAsResend ? '재요청' : '인증 요청'}
            </BoxButton>
          </div>
          {isVerificationVisible && (
            <div className={numberWrapperStyle}>
              <Input
                placeholder={`인증번호 ${MAX_VERIFICATION_CODE}자리`}
                value={verificationCode}
                onChange={(e) => handleVerificationCodeChange(e.target.value)}
                rightAddOn={
                  <Text tag="b2_m" color="gray8" className={timerStyle}>
                    {formattedTime}
                  </Text>
                }
                readOnly={isCodeVerified}
                onClick={isCodeVerified ? handleFocusAndNotify : undefined}
              />
              <BoxButton
                className={buttonStyle({ type: 'default' })}
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
