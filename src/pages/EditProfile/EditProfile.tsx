import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Head from '@/shared/components/Head/Head';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';
import { mockMyPageData } from '../mypage/components/TabWrapper/mockData';
import * as styles from './EditProfile.css';

const profileSchema = z.object({
  nickname: z
    .string()
    .min(1, '댄서네임을 입력해주세요')
    .regex(/^[\w가-힣]+$/, '특수기호, 띄어쓰기는 입력할 수 없어요'),
  phoneNumber: z.string().regex(/^[0-9]\d{10}$/, '숫자만 11자리 입력해주세요'),
  name: z.string().optional(),
});

type profileFormValues = z.infer<typeof profileSchema>;

const EditProfile = () => {
  const data = mockMyPageData;
  const [isChanged, setIsChanged] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<profileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      nickname: data.nickname,
      name: data.name,
      phoneNumber: data.phoneNumber,
    },
    mode: 'onChange',
  });

  const currentNickname = watch('nickname');
  const currentPhoneNumber = watch('phoneNumber');

  useEffect(() => {
    const hasChanged = currentNickname !== data.nickname || currentPhoneNumber !== data.phoneNumber;

    setIsChanged(hasChanged);
  }, [currentNickname, currentPhoneNumber, data.nickname, data.phoneNumber]);

  const isButtonActive = isChanged && isValid;

  // 폼 제출 처리, 임시 로직
  const onSubmit = (formData: profileFormValues) => {
    console.log('제출성공', formData);

    alert('성공적으로 변경되었습니다.');
  };

  return (
    <div className={styles.layoutStyle}>
      <Head level="h2" tag="h6_sb">
        내 정보 수정
      </Head>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputWrapperStyle}>
          <label>
            <Text tag="b2_sb">댄서네임</Text>
          </label>
          <Input placeholder="댄서네임을 입력해주세요" {...register('nickname')} isError={!!errors.nickname} />
          {errors.nickname && (
            <div className={styles.errorMessageStyle}>
              <Text tag="b3_r" color="alert3">
                {errors.nickname.message}
              </Text>
              {/* 
                댄서네임 길이 조건 물어보고 추가예정
                <Text tag="b3_r" color="alert3">
                  {watch('nickname')?.length || 0}/8
                </Text> */}
            </div>
          )}
        </div>
        <div className={styles.inputWrapperStyle}>
          <label>
            <Text tag="b2_sb">이름</Text>
          </label>
          <Input {...register('name')} readOnly />
        </div>
        <div className={styles.inputWrapperStyle}>
          <label>
            <Text tag="b2_sb">전화번호</Text>
          </label>
          <Input placeholder="전화번호를 입력해주세요" {...register('phoneNumber')} isError={!!errors.phoneNumber} />
          {errors.phoneNumber && (
            <div className={styles.errorMessageStyle}>
              <Text tag="b3_r" color="alert3">
                {errors.phoneNumber.message}
              </Text>
            </div>
          )}
        </div>
        <div className={styles.buttonWrapperStyle}>
          <BoxButton variant="primary" isDisabled={!isButtonActive} type="submit">
            확인
          </BoxButton>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
