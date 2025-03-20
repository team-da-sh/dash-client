import KakaoButton from '@/pages/login/components/KakaoButton/KakaoButton';
import LoginHeader from '@/pages/login/components/LoginHeader/LoginHeader';
import { containerStyle } from '@/pages/login/login.css';
import LoginWepm from '@/shared/assets/webm/login.webm';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const Login = () => {
  return (
    <>
      <LoginHeader />

      <Flex direction="column" gap="3.2rem" className={containerStyle}>
        <Flex width="100%" justify="center">
          <video width={300} autoPlay muted loop>
            <source src={LoginWepm} type="video/webm" />
          </video>
        </Flex>

        <Flex direction="column" width="100%">
          <div className={sprinkles({ display: 'flex', flexDirection:'column', width: 30, height: 40, px: 20 })}>
            <div>Dash</div>
            <div>화이팅</div>
          </div>
          <Flex padding='10px 20px'></Flex>
          <Head tag="h2">댄스 클래스로의 첫 걸음,</Head>
          <Head tag="h2">지금 시작해 보세요</Head>
        </Flex>
        <KakaoButton />
      </Flex>
    </>
  );
};

export default Login;
