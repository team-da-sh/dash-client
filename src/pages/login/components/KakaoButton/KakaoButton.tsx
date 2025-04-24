import { buttonStyle, kakaoButtonStyle } from '@/pages/login/components/KakaoButton/kakaoButton.css';
import IcKakaoKakaobrown28 from '@/shared/assets/svg/IcKakaoKakaobrown28';
import Head from '@/shared/components/Head/Head';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const KakaoButton = () => {
  const redirect_uri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  // auth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_REST_API_KEY}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = () => {
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
