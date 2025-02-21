import KakaoButton from '@/pages/login/components/KakaoButton/KakaoButton';
import LoginHeader from '@/pages/login/components/LoginHeader/LoginHeader';
import { containerStyle } from '@/pages/login/login.css';
import { LoginGif } from '@/shared/assets/gif';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';

const Login = () => {
  return (
    <>
      <LoginHeader />

      <Flex direction="column" gap="3.2rem" className={containerStyle}>
        <Flex width="100%" justify="center">
          <img src={LoginGif} width={300} />
        </Flex>

        <Flex direction="column" width="100%">
          <Head tag="h2">댄스 클래스로의 첫 걸음,</Head>
          <Head tag="h2">지금 시작해 보세요</Head>
        </Flex>
        <KakaoButton />
      </Flex>
    </>
  );
};

export default Login;
