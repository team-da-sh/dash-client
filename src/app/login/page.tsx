'use client';

import KakaoButton from '@/app/login/components/KakaoButton/KakaoButton';
import { containerStyle, videoStyle, buttonContainerStyle, titleWrapperStyle } from '@/app/login/index.css';
import Head from '@/common/components/Head/Head';

const LOGIN_VIDEO_SRC = '/videos/login.webm';

export default function Page() {
  return (
    <main>
      <div className={containerStyle}>
        <div className={titleWrapperStyle}>
          <Head tag="h3_sb">댄스 클래스로의 첫 걸음,</Head>
          <Head tag="h3_sb">지금 시작해 보세요</Head>
        </div>

        <div className={videoStyle}>
          <video width={300} autoPlay muted loop playsInline preload="auto">
            <source src={LOGIN_VIDEO_SRC} type="video/webm" />
          </video>
        </div>
      </div>

      <div className={buttonContainerStyle}>
        <KakaoButton />
      </div>
    </main>
  );
}
