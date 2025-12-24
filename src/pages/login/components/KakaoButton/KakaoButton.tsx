import { buttonStyle, kakaoButtonStyle } from '@/pages/login/components/KakaoButton/kakaoButton.css';
import IcKakaoKakaobrown28 from '@/shared/assets/svg/IcKakaoKakaobrown28';
import Head from '@/shared/components/Head/Head';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const KakaoButton = () => {
  const redirect_uri = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const rest_api_key = import.meta.env.VITE_REST_API_KEY;

  // TODO: 환경 변수 확인용 - 배포 확인 후 제거
  console.log('🔍 카카오 로그인 환경 변수 확인:', {
    VITE_KAKAO_REDIRECT_URI: redirect_uri || '❌ undefined',
    VITE_REST_API_KEY: rest_api_key ? '✅ 설정됨' : '❌ undefined',
    전체_URL: `https://kauth.kakao.com/oauth/authorize?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`,
  });

  // auth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = () => {
    // TODO: 환경 변수 확인용 - 배포 확인 후 제거
    console.log('🔍 카카오 로그인 버튼 클릭 - 환경 변수 확인:', {
      VITE_KAKAO_REDIRECT_URI: redirect_uri || '❌ undefined',
      VITE_REST_API_KEY: rest_api_key ? '✅ 설정됨' : '❌ undefined',
      생성된_URL: kakaoURL,
    });

    window.location.href = kakaoURL;
  };

  return (
    <button className={kakaoButtonStyle} onClick={handleLogin}>
      <div className={sprinkles({ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center' })}>
        <IcKakaoKakaobrown28 width={28} height={28} />
        <Head tag="b1_sb" color="kakao2" className={buttonStyle}>
          카카오로 계속하기
        </Head>
      </div>
    </button>
  );
};

export default KakaoButton;
