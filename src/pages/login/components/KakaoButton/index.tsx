import { kakaoButtonStyle } from '@/pages/login/components/KakaoButton/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { IcKakaoKakaobrown28 } from '@/assets/svg';

interface KakaoButtonProps {}

const KakaoButton = ({}: KakaoButtonProps) => {
  // 테스트용 키, 실제 배포 사이트용은 env로 분리할 예정
  const Rest_api_key = '802706f4d7371ae8587dec525ed29979'; //REST API KEY
  const redirect_uri = 'http://localhost:5173/auth'; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
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
