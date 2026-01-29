import KakaoButton from '@/pages/login/components/KakaoButton/KakaoButton';
import { containerStyle, videoStyle, buttonContainerStyle, titleWrapperStyle } from '@/pages/login/login.css';
import LoginWepm from '@/shared/assets/webm/login.webm';
import Head from '@/common/components/Head/Head';

const Login = () => {
  return (
    <main>
      <div className={containerStyle}>
        <div className={titleWrapperStyle}>
          <Head tag="h3_sb">댄스 클래스로의 첫 걸음,</Head>
          <Head tag="h3_sb">지금 시작해 보세요</Head>
        </div>

        <div className={videoStyle}>
          <video width={300} autoPlay muted loop playsInline preload="auto">
            <source src={LoginWepm} type="video/webm" />
          </video>
        </div>
      </div>

      <div className={buttonContainerStyle}>
        <KakaoButton />
      </div>
    </main>
  );
};

export default Login;
