import KakaoButton from '@/pages/login/components/KakaoButton';
import LoginHeader from '@/pages/login/components/LoginHeader';
import { containerStyle } from '@/pages/login/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { IcAsset1 } from '@/assets/svg';

const Login = () => {
  return (
    <>
      <LoginHeader />

      <Flex direction="column" gap="3.2rem" className={containerStyle}>
        <IcAsset1 width={220} height={220} />
        <Flex direction="column">
          <Head tag="h2">댄스 클래스로의 첫 걸음,</Head>
          <Head tag="h2">지금 시작해 보세요</Head>
        </Flex>
        <KakaoButton />
      </Flex>
    </>
  );
};

export default Login;
