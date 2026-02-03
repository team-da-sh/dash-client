'use client';

import { useRouter } from 'next/navigation';
import {
  clearGifStyle,
  buttonContainerStyle,
  mainContainerStyle,
  contentWrapperStyle,
  titleWrapperStyle,
} from '@/app/mypage/(instructor)/class-register/completion/index.css';
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
      <div className={mainContainerStyle}>
        <div className={contentWrapperStyle}>
          <div className={titleWrapperStyle}>
            <Head level="h1" tag="h3_sb">
              축하드립니다 <br />
              클래스 개설이 완료되었어요
            </Head>
          </div>
          <Text tag="b2_m" color="gray7">
            방금 등록한 클래스는 마이페이지에서 관리할 수 있어요
          </Text>
          <img src={ClearGif.src} alt="완료 페이지 캐릭터" className={clearGifStyle} />
        </div>
      </div>
      <div className={buttonContainerStyle}>
        <BoxButton onClick={handleComplete}>완료</BoxButton>
      </div>
    </main>
  );
}
