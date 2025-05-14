import ProfileForm from '@/pages/editProfiles/components/ProfileForm/ProfileForm';
import { useGetMyPage } from '@/pages/mypage/apis/queries';
import Head from '@/shared/components/Head/Head';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const EditProfile = () => {
  const { data } = useGetMyPage();

  if (!data) {
    return <></>;
  }

  return (
    <main className={sprinkles({ padding: 20 })}>
      <Head level="h2" tag="h6_sb">
        내 정보 수정
      </Head>
      <ProfileForm
        defaultValues={{
          nickname: data.nickname,
          name: data.name,
          phoneNumber: data.phoneNumber,
          profileImageUrl: data.profileImageUrl,
        }}
      />
    </main>
  );
};

export default EditProfile;
