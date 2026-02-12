'use client';

import { useRouter } from 'next/navigation';
import {
  containerStyle,
  clearStyle,
  buttonContainerStyle,
  contentWrapperStyle,
} from '@/app/my/(instructor)/profile-register-completion/index.css';
import BoxButton from '@/common/components/BoxButton/BoxButton';
import Head from '@/common/components/Head/Head';
import Text from '@/common/components/Text/Text';
import { ClearGif } from '@/shared/assets/gif';

export default function Page() {
  const router = useRouter();

  const handleComplete = () => {
    router.push('/');
  };

  return (
    <main>
      <div className={containerStyle}>
        <div className={contentWrapperStyle}>
          <Head level="h1" tag="h3_sb">
            강사 등록 완료! <br />
            멋진 클래스 기대할게요
          </Head>
          <Text tag="b2_m" color="gray7">
            이제 마이페이지에서 내 클래스를 개설할 수 있어요
          </Text>
        </div>
        <img src={ClearGif.src} alt="완료 페이지 캐릭터" className={clearStyle} />
      </div>

      <div className={buttonContainerStyle}>
        <BoxButton onClick={handleComplete}>홈으로 이동</BoxButton>
      </div>
    </main>
  );
}
