import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm, useController } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { usePatchMyProfile } from '@/pages/editProfiles/api/queries';
import FormField from '@/pages/editProfiles/components/FormField/FormField.tsx';
import * as styles from '@/pages/editProfiles/components/ProfileForm/profileForm.css';
import { MAX_NAME_LENGTH, MAX_NICKNAME_LENGTH } from '@/pages/editProfiles/constants/limit.ts';
import { profileSchema, ProfileFormValues } from '@/pages/editProfiles/schema/profileSchema.ts';
import { UpdateProfileRequestTypes } from '@/pages/editProfiles/types/api.ts';
import ImageUploadSection from '@/pages/instructorRegister/components/ImageUploadSection/ImageUploadSection.tsx';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Text from '@/shared/components/Text/Text';
import { notify } from '@/shared/components/Toast/Toast';
import useImageUploader from '@/shared/hooks/useImageUploader';

interface ProfileFormPropTypes {
  defaultValues: {
    nickname: string;
    phoneNumber: string;
    name: string;
    profileImageUrl: string;
  };
}

const ProfileForm = ({ defaultValues }: ProfileFormPropTypes) => {
  const navigate = useNavigate();

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const mutation = usePatchMyProfile({
    onSuccess: () => {
      navigate(ROUTES_CONFIG.mypage.path);
    },
    onError: () => {
      notify('프로필 업데이트에 실패했습니다. 다시 시도해주세요');
    },
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
    watch,
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { field } = useController({
    name: 'profileImageUrl',
    control,
  });

  const handleSuccess = (url: string) => {
    field.onChange(url);
  };

  const handleDelete = () => {
    field.onChange('');
  };

  const { previewImg, imgRef, handleUploaderClick, uploadImgFile } = useImageUploader(handleSuccess, handleDelete);

  const { nickname, name } = watch();
  const isButtonActive = isDirty && isValid;

  const onSubmit = (formData: ProfileFormValues) => {
    const submitData: UpdateProfileRequestTypes = {
      nickname: formData.nickname,
      phoneNumber: formData.phoneNumber,
      name: formData.name,
      profileImageUrl: typeof formData.profileImageUrl === 'string' ? formData.profileImageUrl : '',
    };

    mutation.mutate(submitData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ImageUploadSection
        previewImg={previewImg || defaultValues.profileImageUrl}
        handleUploaderClick={handleUploaderClick}
        uploadImgFile={uploadImgFile}
        imgRef={imgRef}
      />

      <FormField
        label="댄서네임"
        name="nickname"
        placeholder="댄서네임을 입력해주세요"
        register={register}
        error={errors.nickname}
        isFocused={focusedField === 'nickname'}
        onFocus={() => handleFocus('nickname')}
        onBlur={handleBlur}
        validationMessage={
          <Text tag="b3_r" color="alert3">
            {`${nickname?.length || 0}/${MAX_NICKNAME_LENGTH}`}
          </Text>
        }
      />

      <FormField
        label="이름"
        name="name"
        register={register}
        placeholder="이름을 입력해주세요"
        error={errors.name}
        isFocused={focusedField === 'name'}
        onFocus={() => handleFocus('name')}
        onBlur={handleBlur}
        validationMessage={
          <Text tag="b3_r" color="alert3">
            {`${name?.length || 0}/${MAX_NAME_LENGTH}`}
          </Text>
        }
      />

      <FormField
        label="전화번호"
        name="phoneNumber"
        placeholder="전화번호를 입력해주세요"
        register={register}
        error={errors.phoneNumber}
        isFocused={focusedField === 'phoneNumber'}
        onFocus={() => handleFocus('phoneNumber')}
        onBlur={handleBlur}
      />

      <div className={styles.buttonWrapperStyle}>
        <BoxButton variant="primary" isDisabled={!isButtonActive} type="submit">
          확인
        </BoxButton>
      </div>
    </form>
  );
};

export default ProfileForm;
