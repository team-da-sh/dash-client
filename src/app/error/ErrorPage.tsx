'use client';

import { useRouter } from 'next/navigation';
import { lazy, Suspense } from 'react';
import {
  containerStyle,
  buttonContainerStyle,
  headerStyle,
  messageSectionStyle,
  errorIconStyle,
} from '@/app/error/index.css';
import BoxButton from '@/common/components/BoxButton/BoxButton';
import Head from '@/common/components/Head/Head';
import Text from '@/common/components/Text/Text';

const IcError = lazy(() => import('@/shared/assets/svg/IcError'));

export default function ErrorPage() {
  const router = useRouter();

  const handleHomeNavigation = () => {
    router.push('/');
    window.location.reload();
  };

  return (
    <main>
      <div className={containerStyle}>
        <header className={headerStyle}>
          <Head tag="h5_sb">서비스 이용에 불편을 드려 죄송합니다.</Head>

          <section className={messageSectionStyle}>
            <Text tag="b3_m">요청하신 페이지를 처리하는 도중 예기치 못한 에러가 발생했어요.</Text>
            <Text tag="b3_m">다시 한 번 시도하거나 홈으로 이동해 주세요.</Text>
          </section>
        </header>
        <Suspense fallback={<div>Loading...</div>}>
          <IcError width={300} height={300} className={errorIconStyle} />
        </Suspense>
      </div>

      <div className={buttonContainerStyle}>
        <BoxButton onClick={handleHomeNavigation}>홈으로 이동</BoxButton>
      </div>
    </main>
  );
}
