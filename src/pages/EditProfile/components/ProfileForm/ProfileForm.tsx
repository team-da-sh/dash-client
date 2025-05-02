import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Text from '@/shared/components/Text/Text';
import { profileSchema, ProfileFormValues } from '../../schema/profileSchema';
import FormField from '../FormField/FormField';
import * as styles from './profileForm.css.ts';

interface ProfileFormProps {
  defaultValues: ProfileFormValues;
  onSubmit: (data: ProfileFormValues) => void;
}

const ProfileForm = ({ defaultValues, onSubmit }: ProfileFormProps) => {
  const [isChanged, setIsChanged] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues,
    mode: 'onChange',
  });

  const currentNickname = watch('nickname');
  const currentPhoneNumber = watch('phoneNumber');

  useEffect(() => {
    const hasChanged = currentNickname !== defaultValues.nickname || currentPhoneNumber !== defaultValues.phoneNumber;

    setIsChanged(hasChanged);
  }, [currentNickname, currentPhoneNumber, defaultValues.nickname, defaultValues.phoneNumber]);

  const isButtonActive = isChanged && isValid;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="댄서네임"
        name="nickname"
        placeholder="댄서네임을 입력해주세요"
        register={register}
        error={errors.nickname}
        rightAddOn={
          <Text tag="b3_r" color="gray6">
            {currentNickname?.length || 0}/8
          </Text>
        }
      />

      <FormField label="이름" name="name" register={register} readOnly />

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
