import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import FormField from '@/pages/editProfile/components/FormField/FormField.tsx';
import ProfileImageUpload from '@/pages/editProfile/components/ProfileImageUpload/ProfileImageUpload.tsx';
import { MAX_NAME_LENGTH, MAX_NICKNAME_LENGTH } from '@/pages/editProfile/constants/limit.ts';
import { profileSchema, ProfileFormValues } from '@/pages/editProfile/schema/profileSchema.ts';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Text from '@/shared/components/Text/Text';
import * as styles from './profileForm.css.ts';

interface ProfileFormPropTypes {
  defaultValues: {
    nickname: string;
    phoneNumber: string;
    name: string;
    profileImageUrl: string;
  };
}

const ProfileForm = ({ defaultValues }: ProfileFormPropTypes) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
    watch,
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      nickname: defaultValues.nickname,
      phoneNumber: defaultValues.phoneNumber,
      name: defaultValues.name,
      profileImageUrl: defaultValues.profileImageUrl,
    },
    mode: 'onChange',
  });

  const { nickname, name } = watch();

  const isButtonActive = isDirty && isValid;

  const onSubmit = (formData: ProfileFormValues) => {
    const submitData = new FormData();
    submitData.append('nickname', formData.nickname);
    submitData.append('phoneNumber', formData.phoneNumber);
    submitData.append('name', formData.name);

    if (formData.profileImageUrl && formData.profileImageUrl.length > 0) {
      submitData.append('profileImage', formData.profileImageUrl[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ProfileImageUpload defaultImageUrl={defaultValues.profileImageUrl} control={control} />

      <FormField
        label="댄서네임"
        name="nickname"
        placeholder="댄서네임을 입력해주세요"
        register={register}
        error={errors.nickname}
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
