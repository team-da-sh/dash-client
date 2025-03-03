import { buttonStyle, kakaoButtonStyle } from '@/pages/login/components/KakaoButton/kakaoButton.css';
import IcKakaoKakaobrown28 from '@/shared/assets/svg/IcKakaoKakaobrown28';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';

const KakaoButton = () => {
  const redirect_uri = 'http://localhost:5173/auth'; //Redirect URI

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
