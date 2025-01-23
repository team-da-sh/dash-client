import KakaoButton from '@/pages/login/components/KakaoButton';
import LoginHeader from '@/pages/login/components/LoginHeader';
import { containerStyle } from '@/pages/login/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { LoginGif } from '@/assets/gif';

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
