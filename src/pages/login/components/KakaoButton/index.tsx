import { kakaoButtonStyle } from '@/pages/login/components/KakaoButton/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { IcKakaoKakaobrown28 } from '@/assets/svg';

const KakaoButton = () => {
  const redirect_uri = 'http://localhost:5173/auth'; //Redirect URI
  console.log(import.meta.env.VITE_REST_API_KEY);

  // auth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_REST_API_KEY}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <button className={kakaoButtonStyle} onClick={handleLogin}>
      <Flex gap="0.8rem" align="center" justify="center">
        <IcKakaoKakaobrown28 width={28} height={28} />
        <Head tag="h6" color="kakao2">
          카카오로 계속하기
        </Head>
      </Flex>
    </button>
  );
};

export default KakaoButton;
