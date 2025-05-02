// EditProfile.tsx
import Head from '@/shared/components/Head/Head';
import { mockMyPageData } from '../mypage/components/TabWrapper/mockData';
import * as styles from './EditProfile.css';
import ProfileForm from './components/ProfileForm/ProfileForm';
import { ProfileFormValues } from './schema/profileSchema';

const EditProfile = () => {
  const defaultValues: ProfileFormValues = {
    nickname: mockMyPageData.nickname,
    name: mockMyPageData.name,
    phoneNumber: mockMyPageData.phoneNumber,
  };

  //api 연결 전 임시
  const handleSubmit = (formData: ProfileFormValues) => {
    console.log('제출성공', formData);
    alert('성공적으로 변경되었습니다.');
  };

  return (
    <div className={styles.layoutStyle}>
      <Head level="h2" tag="h6_sb">
        내 정보 수정
      </Head>
      <ProfileForm defaultValues={defaultValues} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditProfile;
