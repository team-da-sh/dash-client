'use client';

import ProfileForm from '@/app/mypage/(student)/edit-profile/components/ProfileForm/ProfileForm';
import { containerStyle } from '@/app/mypage/(student)/edit-profile/index.css';
import { useGetMyPage } from '@/app/mypage/apis/queries';
import Head from '@/common/components/Head/Head';

export default function Page() {
  const { data } = useGetMyPage();

  if (!data) {
    return <></>;
  }

  return (
    <main className={containerStyle}>
      <Head level="h2" tag="h6_sb">
        내 정보 수정
      </Head>
      <ProfileForm
        defaultValues={{
          name: data.name,
          phoneNumber: data.phoneNumber,
          profileImageUrl: data.profileImageUrl,
        }}
      />
    </main>
  );
}
