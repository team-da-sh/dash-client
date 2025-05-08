import ProfileForm from '@/pages/editProfiles/components/ProfileForm/ProfileForm';
import { mockMyPageData } from '@/pages/mypage/components/TabWrapper/mockData';
import Head from '@/shared/components/Head/Head';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const EditProfile = () => {
  return (
    <main className={sprinkles({ padding: 20 })}>
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
      />
    </main>
  );
};

export default EditProfile;
