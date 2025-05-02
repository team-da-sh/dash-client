import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
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
});

type profileFormValues = z.infer<typeof profileSchema>;

const EditProfile = () => {
  const data = mockMyPageData;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<profileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      nickname: data.nickname,
    },
  });

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
            <Text tag="b3_r" color="alert3">
              {errors.nickname.message}
            </Text>
          )}
        </div>
        <button type="submit">확인</button>
      </form>
    </div>
  );
};

export default EditProfile;
