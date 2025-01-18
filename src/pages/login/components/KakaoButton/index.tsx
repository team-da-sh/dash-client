import { kakaoButtonStyle } from '@/pages/login/components/KakaoButton/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { IcKakaoKakaobrown28 } from '@/assets/svg';

interface KakaoButtonProps {}

const KakaoButton = ({}: KakaoButtonProps) => {
  return (
    <button className={kakaoButtonStyle}>
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
