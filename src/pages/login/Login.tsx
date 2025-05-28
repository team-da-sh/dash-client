import KakaoButton from '@/pages/login/components/KakaoButton/KakaoButton';
import * as styles from '@/pages/login/login.css';
import LoginWepm from '@/shared/assets/webm/login.webm';
import Head from '@/shared/components/Head/Head';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const Login = () => {
  return (
    <main>
      <div className={styles.containerStyle}>
        <div className={sprinkles({ display: 'flex', flexDirection: 'column', width: '100%' })}>
          <Head tag="h3_sb">댄스 클래스로의 첫 걸음,</Head>
          <Head tag="h3_sb">지금 시작해 보세요</Head>
        </div>

        <div className={styles.videoStyle}>
          <video width={300} autoPlay muted loop playsInline>
            <source src={LoginWepm} type="video/webm" />
          </video>
        </div>
      </div>

      <div className={styles.buttonContainerStyle}>
        <KakaoButton />
      </div>
    </main>
  );
};

export default Login;
