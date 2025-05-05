import Head from '@/shared/components/Head/Head';
import { mockMyPageData } from '../mypage/components/TabWrapper/mockData';
import * as styles from './EditProfile.css';
import ProfileForm from './components/ProfileForm/ProfileForm';
import { ProfileFormValues } from './schema/profileSchema';

const EditProfile = () => {
  const handleSubmit = (formData: ProfileFormValues) => {
    const submitData = new FormData();
    submitData.append('nickname', formData.nickname);
    submitData.append('phoneNumber', formData.phoneNumber);
    submitData.append('name', formData.name);

    if (formData.profileImageUrl && formData.profileImageUrl.length > 0) {
      submitData.append('profileImage', formData.profileImageUrl[0]);
    }

    console.log('==== FormData 내용 ====');
    for (const pair of submitData.entries()) {
      console.log(`${pair[0]}: ${pair[1] instanceof File ? `File(${pair[1].name}, ${pair[1].size} bytes)` : pair[1]}`);
    }

    console.log('==== 원본 폼 데이터 ====', formData);
    alert('성공적으로 변경되었습니다.');
  };

  return (
    <div className={styles.layoutStyle}>
      <Head level="h2" tag="h6_sb">
        내 정보 수정
      </Head>
      <ProfileForm
        defaultValues={{
          nickname: mockMyPageData.nickname,
          name: mockMyPageData.name,
          phoneNumber: mockMyPageData.phoneNumber,
          profileImageUrl: mockMyPageData.profileImageUrl,
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditProfile;
