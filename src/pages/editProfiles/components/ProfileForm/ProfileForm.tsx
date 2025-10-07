import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useController, useForm } from 'react-hook-form';
import { usePatchMyProfile } from '@/pages/editProfiles/api/queries';
import BottomSheet from '@/pages/editProfiles/components/BottomSheet/BottomSheet';
import * as styles from '@/pages/editProfiles/components/ProfileForm/profileForm.css';
import type { ProfileFormValues } from '@/pages/editProfiles/schema/profileSchema';
import { profileSchema } from '@/pages/editProfiles/schema/profileSchema';
import type { UpdateProfileRequestTypes } from '@/pages/editProfiles/types/api';
import { allowOnlyNumberKey, allowOnlyNumberPaste } from '@/pages/editProfiles/utils/inputUtils';
import ImageUploadSection from '@/pages/instructorRegister/components/ImageUploadSection/ImageUploadSection';
import { usePostPhoneRequest, usePostPhoneVerify } from '@/pages/onboarding/apis/queries';
import { REQUEST_DELAY, TIMER_DURATION } from '@/pages/onboarding/constants';
import { useVerificationTimer } from '@/pages/onboarding/hooks/useVerificationTimer';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';
import { notify } from '@/shared/components/Toast/Toast';
import {
  MAX_NAME_LENGTH,
  MAX_PHONENUMBER_LENGTH,
  MAX_VERIFICATION_CODE,
  PHONE_AUTH_MESSAGES,
} from '@/shared/constants/userInfo';
import useImageUploader from '@/shared/hooks/useImageUploader';
import { getAccessToken } from '@/shared/utils/handleToken';

interface ProfileFormPropTypes {
  defaultValues: {
    profileImageUrl: string | null;
    name: string;
    phoneNumber: string;
  };
}

const ProfileForm = ({ defaultValues }: ProfileFormPropTypes) => {
  const { mutate: editMyProfile } = usePatchMyProfile();
  const { mutate: requestPhoneMutate } = usePostPhoneRequest();
  const { mutate: verifyPhoneMutate } = usePostPhoneVerify();

  const [isImageClick, setIsImageClick] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerificationVisible, setIsVerificationVisible] = useState(false);

  const { isRunning, formattedTime, startTimer, seconds, resetTimer } = useVerificationTimer(TIMER_DURATION);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { field } = useController({ name: 'profileImageUrl', control });

  const handleSuccess = (url: string) => {
    field.onChange(url);
    handleCloseBottomSheet();
  };

  const handleDelete = () => {
    field.onChange('');
    if (imgRef.current) imgRef.current.value = '';
  };

  const handleCloseBottomSheet = () => {
    document.body.style.overflow = '';
    setIsImageClick(false);
  };

  const { previewImg, imgRef, handleUploaderClick, deleteImgFile, uploadImgFile } = useImageUploader(
    handleSuccess,
    handleDelete,
    defaultValues.profileImageUrl,
    handleCloseBottomSheet
  );

  const handleImageFormClick = () => {
    if (!watch('profileImageUrl')) {
      handleUploaderClick();
    } else {
      setIsImageClick(true);
    }
  };

  const accessToken = getAccessToken() ?? '';

  // 인증 관련 로직
  const phoneNumber = watch('phoneNumber');

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
    notify({ message: PHONE_AUTH_MESSAGES.ALREADY_VERIFIED, icon: 'success' });
  };

  // 폼 제출
  const currentName = watch('name');
  const currentPhone = watch('phoneNumber');
  const currentImage = watch('profileImageUrl');

  // 이름/이미지 변경 여부
  const isNameChanged = currentName !== defaultValues.name;
  const isImageChanged = (currentImage || '') !== (defaultValues.profileImageUrl || '');

  // 전화번호 변경 여부
  const isPhoneChanged = currentPhone !== defaultValues.phoneNumber;
  const isPhoneVerified = isPhoneChanged ? isVerificationVisible && isCodeVerified : true;

  // 버튼 활성화 여부
  const isButtonActive = (isNameChanged || isImageChanged || isPhoneChanged) && isPhoneVerified;

  const isRequestDisabled = !isPhoneChanged || phoneNumber.length !== MAX_PHONENUMBER_LENGTH || isCodeVerified;
  const isVerifyButtonDisabled = verificationCode.length !== MAX_VERIFICATION_CODE;
  const showAsResend = isRunning || isCodeVerified;

  const onSubmit = (formData: ProfileFormValues) => {
    const value = formData.profileImageUrl;
    const profileImageUrl = typeof value === 'string' && value.trim() !== '' ? value : null;

    const submitData: UpdateProfileRequestTypes = {
      phoneNumber: formData.phoneNumber,
      name: formData.name,
      profileImageUrl,
    };

    editMyProfile(submitData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
      <div>
        {/* 프로필 이미지 */}
        <div className={styles.imageWrapperStyle}>
          <ImageUploadSection
            previewImg={previewImg}
            uploadImgFile={uploadImgFile}
            imgRef={imgRef}
            onClick={handleImageFormClick}
          />
        </div>

        {/* 이름 */}
        <div className={styles.fieldWrapperStyle}>
          <label>
            <Text tag="b2_sb">이름</Text>
          </label>
          <Input
            {...register('name')}
            value={watch('name')}
            placeholder="이름을 입력해주세요"
            isError={!!errors.name}
            helperText={errors.name?.message}
            maxLength={MAX_NAME_LENGTH}
            showMaxLength={true}
          />
        </div>

        {/* 전화번호 + 인증 */}
        <div className={styles.fieldWrapperStyle}>
          <label>
            <Text tag="b2_sb">전화번호</Text>
          </label>
          <div className={styles.numberWrapperStyle}>
            <Input
              {...register('phoneNumber')}
              placeholder="01012345678"
              maxLength={MAX_PHONENUMBER_LENGTH}
              inputMode="numeric"
              onKeyDown={allowOnlyNumberKey}
              onPaste={allowOnlyNumberPaste}
              readOnly={isCodeVerified}
              onMouseDown={handleFocusAndNotify}
              onTouchStart={handleFocusAndNotify}
              onChange={(e) => {
                const onlyNumbers = e.target.value.replace(/\D/g, '');
                e.target.value = onlyNumbers;
                register('phoneNumber').onChange(e);
              }}
              value={phoneNumber}
              className={styles.inputStyle}
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
                placeholder={`인증번호 ${MAX_VERIFICATION_CODE}자리`}
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ''))}
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

      {/* 제출 버튼 */}
      <div className={styles.buttonWrapperStyle}>
        <BoxButton variant="primary" isDisabled={!isButtonActive} type="submit">
          확인
        </BoxButton>
      </div>

      {/* 이미지 변경 bottom sheet */}
      <BottomSheet
        isVisible={isImageClick}
        onClose={handleCloseBottomSheet}
        onSelectImage={handleUploaderClick}
        onDeleteImage={deleteImgFile}
      />
    </form>
  );
};

export default ProfileForm;
