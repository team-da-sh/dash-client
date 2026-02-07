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

export default function NotFoundPage() {
  return (
    <main>
      <div className={containerStyle}>
        <header className={headerStyle}>
          <Head tag="h5_sb">요청하신 페이지가 존재하지 않습니다.</Head>

          <section className={messageSectionStyle}>
            <Text tag="b3_m">입력하신 주소가 잘못되었거나 페이지가 삭제되었어요.</Text>
            <Text tag="b3_m">홈으로 이동해 다시 이용해 주세요.</Text>
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
