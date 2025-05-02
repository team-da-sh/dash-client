import { z } from 'zod';
import Head from '@/shared/components/Head/Head';
import Input from '@/shared/components/Input/Input';

const userSchema = z.object({
  profilePhoto: z
    .any() // FileList 타입이므로 any로 잡은 뒤 refine
    .refine((files) => {
      if (!(files instanceof FileList)) return false;
      return files.length <= 1;
    }, '프로필 사진은 최대 1장까지 업로드 가능합니다'),

  nickname: z
    .string()
    .min(1, '댄서 네임을 입력해주세요')
    .max(20, '20자 이내로 입력해주세요')
    .regex(/^[\w가-힣]+$/, '특수기호 및 공백 없이 입력해주세요'),

  phoneNumber: z
    .string()
    .length(11, '숫자 11자리를 입력해주세요')
    .regex(/^[0-9]\d{10}$/, '숫자만 11자리 입력해주세요'),
});

const EditProfile = () => {
  return (
    <main>
      <Head level="h2" tag="h6_sb">
        내 정보 수정
      </Head>
      <section>
        <Input placeholder="댄서네임" />
      </section>
    </main>
  );
};

export default EditProfile;
