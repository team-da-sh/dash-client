import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import FormField from '@/pages/editProfile/components/FormField/FormField.tsx';
import ProfileImageUpload from '@/pages/editProfile/components/ProfileImageUpload/ProfileImageUpload.tsx';
import { useFormChanged } from '@/pages/editProfile/hooks/useFormChanged.ts';
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
  onSubmit: (data: ProfileFormValues) => void;
}

const ProfileForm = ({ defaultValues, onSubmit }: ProfileFormPropTypes) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
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

  const currentNickname = watch('nickname');
  const currentName = watch('name');
  const currentPhoneNumber = watch('phoneNumber');
  const currentProfileImage = watch('profileImageUrl');

  const isChanged = useFormChanged(
    [currentNickname, currentPhoneNumber, currentName, currentProfileImage],
    [defaultValues.nickname, defaultValues.phoneNumber, defaultValues.name, defaultValues.profileImageUrl]
  );

  const isButtonActive = isChanged && isValid;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ProfileImageUpload
        defaultImageUrl={defaultValues.profileImageUrl}
        control={control}
        error={errors.profileImageUrl}
      />

      <FormField
        label="댄서네임"
        name="nickname"
        placeholder="댄서네임을 입력해주세요"
        register={register}
        error={errors.nickname}
        rightAddOn={
          <Text tag="b3_r" color="alert3">
            {currentNickname?.length || 0}/8
          </Text>
        }
      />

      <FormField
        label="이름"
        name="name"
        register={register}
        placeholder="이름을 입력해주세요"
        error={errors.name}
        rightAddOn={
          <Text tag="b3_r" color="alert3">
            {currentName?.length || 0}/8
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
