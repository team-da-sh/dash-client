import { buttonStyle, kakaoButtonStyle } from '@/pages/login/components/KakaoButton/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { IcKakaoKakaobrown28 } from '@/assets/svg';

const KakaoButton = () => {
  const redirect_uri = 'https://www.da-sh.kr/auth'; //Redirect URI

  // auth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_REST_API_KEY}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <button className={kakaoButtonStyle} onClick={handleLogin}>
      <Flex gap="0.8rem" align="center" justify="center">
        <IcKakaoKakaobrown28 width={28} height={28} />
        <Head tag="h6" color="kakao2" className={buttonStyle}>
          카카오로 계속하기
        </Head>
      </Flex>
    </button>
  );
};

export default KakaoButton;
