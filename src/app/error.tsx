'use client';

import Link from 'next/link';
import {
  containerStyle,
  buttonContainerStyle,
  headerStyle,
  messageSectionStyle,
  errorIconStyle,
} from '@/app/error.css';
import BoxButton from '@/common/components/BoxButton/BoxButton';
import Head from '@/common/components/Head/Head';
import Text from '@/common/components/Text/Text';
import SvgIcError from '@/shared/assets/svg/IcError';

export default function ErrorPage() {
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
        <SvgIcError width={300} height={300} className={errorIconStyle} />
      </div>
      <div className={buttonContainerStyle}>
        <BoxButton>
          <Link href="/">홈으로 이동</Link>
        </BoxButton>
      </div>
    </main>
  );
}
