import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm, useController } from 'react-hook-form';
import { usePatchMyProfile } from '@/pages/editProfiles/api/queries';
import BottomSheet from '@/pages/editProfiles/components/BottomSheet/BottomSheet';
import FormField from '@/pages/editProfiles/components/FormField/FormField.tsx';
import * as styles from '@/pages/editProfiles/components/ProfileForm/profileForm.css';
import { MAX_NAME_LENGTH, MAX_NICKNAME_LENGTH } from '@/pages/editProfiles/constants/limit.ts';
import { profileSchema, ProfileFormValues } from '@/pages/editProfiles/schema/profileSchema.ts';
import { UpdateProfileRequestTypes } from '@/pages/editProfiles/types/api.ts';
import ImageUploadSection from '@/pages/instructorRegister/components/ImageUploadSection/ImageUploadSection.tsx';
import { MAX_PHONENUMBER_LENGTH } from '@/pages/onboarding/constants';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Text from '@/shared/components/Text/Text';
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
  const { mutate: editMyProfile } = usePatchMyProfile();

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isImageClick, setIsImageClick] = useState(false);

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

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const { field } = useController({
    name: 'profileImageUrl',
    control,
  });

  const handleSuccess = (url: string) => {
    field.onChange(url);
  };

  const handleDelete = () => {
    field.onChange('');
    if (imgRef.current) {
      imgRef.current.value = '';
    }
  };

  const handleImageFormClick = () => {
    setIsImageClick(true);
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

  const { nickname, name, phoneNumber } = watch();
  const isButtonActive = isDirty && isValid;

  const onSubmit = (formData: ProfileFormValues) => {
    const value = formData.profileImageUrl;
    const profileImageUrl = typeof value === 'string' && value.trim() !== '' ? value : null;

    const submitData: UpdateProfileRequestTypes = {
      nickname: formData.nickname,
      phoneNumber: formData.phoneNumber,
      name: formData.name,
      profileImageUrl,
    };

    editMyProfile(submitData);
  };

  const handleSelectImage = () => {
    handleUploaderClick();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ImageUploadSection
        previewImg={previewImg}
        uploadImgFile={uploadImgFile}
        imgRef={imgRef}
        onClick={handleImageFormClick}
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
          <Text
            tag="b3_r"
            color={errors.nickname ? 'alert3' : 'main4'}>{`${nickname?.length || 0}/${MAX_NICKNAME_LENGTH}`}</Text>
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
          <Text tag="b3_r" color={errors.name ? 'alert3' : 'main4'}>{`${name?.length || 0}/${MAX_NAME_LENGTH}`}</Text>
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
        validationMessage={
          <Text
            tag="b3_r"
            color={
              errors.phoneNumber ? 'alert3' : 'main4'
            }>{`${phoneNumber?.length || 0}/${MAX_PHONENUMBER_LENGTH}`}</Text>
        }
      />

      <div className={styles.buttonWrapperStyle}>
        <BoxButton variant="primary" isDisabled={!isButtonActive} type="submit">
          확인
        </BoxButton>
      </div>
      {isImageClick && (
        <BottomSheet
          isVisible={isImageClick}
          onClose={handleCloseBottomSheet}
          onSelectImage={handleSelectImage}
          onDeleteImage={deleteImgFile}
        />
      )}
    </form>
  );
};

export default ProfileForm;
