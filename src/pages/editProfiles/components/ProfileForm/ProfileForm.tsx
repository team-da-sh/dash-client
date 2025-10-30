import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { usePatchMyProfile } from '@/pages/editProfiles/api/queries';
import * as styles from '@/pages/editProfiles/components/ProfileForm/profileForm.css';
import ProfileImageUpload from '@/pages/editProfiles/components/ProfileImageUpload/ProfileImageUpload';
import { useVerification } from '@/pages/editProfiles/hooks/useVerification';
import { profileSchema } from '@/pages/editProfiles/schema/profileSchema';
import type { ProfileFormValues } from '@/pages/editProfiles/schema/profileSchema';
import type { UpdateProfileRequestTypes } from '@/pages/editProfiles/types/api';
import { allowOnlyNumberKey, allowOnlyNumberPaste } from '@/pages/editProfiles/utils/inputUtils';
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

interface ProfileFormPropTypes {
  defaultValues: {
    profileImageUrl: string | null;
    name: string;
    phoneNumber: string;
  };
}

const ProfileForm = ({ defaultValues }: ProfileFormPropTypes) => {
  const { mutate: editMyProfile } = usePatchMyProfile();

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

  const phoneNumber = watch('phoneNumber');

  const {
    state: { code: verificationCode, isVisible: isVerificationVisible, isVerified: isCodeVerified },
    dispatch,
    handleRequestVerification,
    handleVerifyCode,
    formattedTime,
    isRunning,
  } = useVerification(phoneNumber);

  const handleFocusAndNotify = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isCodeVerified) return;
    e.preventDefault();
    (e.target as HTMLElement).blur?.();
    notify({ message: PHONE_AUTH_MESSAGES.ALREADY_VERIFIED, icon: 'success', bottomGap: 'large' });
  };

  const currentName = watch('name');
  const currentPhone = watch('phoneNumber');
  const currentImage = watch('profileImageUrl');

  const isNameChanged = currentName !== defaultValues.name;
  const isImageChanged = (currentImage || '') !== (defaultValues.profileImageUrl || '');
  const isPhoneChanged = currentPhone !== defaultValues.phoneNumber;

  const isPhoneVerified = isPhoneChanged ? isVerificationVisible && isCodeVerified : true;
  const isButtonActive = (isNameChanged || isImageChanged || isPhoneChanged) && isPhoneVerified;

  const isRequestDisabled = !isPhoneChanged || phoneNumber.length !== MAX_PHONENUMBER_LENGTH || isCodeVerified;
  const isVerifyButtonDisabled = verificationCode.length !== MAX_VERIFICATION_CODE;
  const showAsResend = isRunning || isCodeVerified;

  const onSubmit = (formData: ProfileFormValues) => {
    const profileImageUrl =
      typeof formData.profileImageUrl === 'string' && formData.profileImageUrl.trim() !== ''
        ? formData.profileImageUrl
        : null;

    const submitData: UpdateProfileRequestTypes = {
      phoneNumber: formData.phoneNumber,
      name: formData.name,
      profileImageUrl,
    };

    editMyProfile(submitData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <div className={styles.imageSection}>
          <ProfileImageUpload defaultImageUrl={defaultValues.profileImageUrl ?? ''} control={control} />
        </div>

        <div className={styles.fieldStyle}>
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
            showMaxLength
          />
        </div>

        <div className={styles.fieldStyle}>
          <label>
            <Text tag="b2_sb">전화번호</Text>
          </label>

          <div className={styles.inputRow}>
            <Input
              {...register('phoneNumber')}
              placeholder="01012345678"
              maxLength={MAX_PHONENUMBER_LENGTH}
              inputMode="numeric"
              onKeyDown={allowOnlyNumberKey}
              onPaste={allowOnlyNumberPaste}
              readOnly={isCodeVerified}
              onPointerDown={handleFocusAndNotify}
              onChange={(e) => {
                const onlyNumbers = e.target.value.replace(/\D/g, '');
                e.target.value = onlyNumbers;
                register('phoneNumber').onChange(e);
              }}
              value={phoneNumber}
              className={styles.input}
            />

            <BoxButton
              className={styles.buttonStyle({ type: isRunning ? 'resend' : 'default' })}
              isDisabled={isRequestDisabled}
              onClick={handleRequestVerification}>
              {showAsResend ? '재요청' : '인증 요청'}
            </BoxButton>
          </div>

          {isVerificationVisible && (
            <div className={styles.inputRow}>
              <Input
                placeholder={`인증번호 ${MAX_VERIFICATION_CODE}자리`}
                value={verificationCode}
                onChange={(e) => dispatch({ type: 'CODE_CHANGE', payload: e.target.value.replace(/\D/g, '') })}
                rightAddOn={
                  <Text tag="b2_m" color="gray8" className={styles.timerStyle}>
                    {formattedTime}
                  </Text>
                }
                maxLength={MAX_VERIFICATION_CODE}
                readOnly={isCodeVerified}
                onPointerDown={handleFocusAndNotify}
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

      <div className={styles.submitSection}>
        <BoxButton variant="primary" isDisabled={!isButtonActive} type="submit">
          확인
        </BoxButton>
      </div>
    </form>
  );
};

export default ProfileForm;
