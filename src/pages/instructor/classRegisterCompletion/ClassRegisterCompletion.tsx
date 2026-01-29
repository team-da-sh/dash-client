import { useNavigate } from 'react-router-dom';
import {
  clearGifStyle,
  buttonContainerStyle,
  mainContainerStyle,
  contentWrapperStyle,
  titleWrapperStyle,
} from '@/pages/instructor/classRegisterCompletion/classRegisterCompletion.css';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { ClearGif } from '@/shared/assets/gif';
import BoxButton from '@/common/components/BoxButton/BoxButton';
import Head from '@/common/components/Head/Head';
import Text from '@/common/components/Text/Text';

const ClassRegisterCompletion = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate(ROUTES_CONFIG.home.path);
  };

  return (
    <main>
      <div className={mainContainerStyle}>
        <div className={contentWrapperStyle}>
          <div className={titleWrapperStyle}>
            <Head level="h1" tag="h3_sb">
              축하드립니다 <br />
              클래스 개설이 완료되었어요
            </Head>
          </div>
          <Text tag="b2_m" color="gray7">
            방금 등록한 클래스는 마이페이지에서 관리할 수 있어요
          </Text>
          <img src={ClearGif} alt="완료 페이지 캐릭터" className={clearGifStyle} />
        </div>
      </div>
      <div className={buttonContainerStyle}>
        <BoxButton onClick={handleComplete}>완료</BoxButton>
      </div>
    </main>
  );
};

export default ClassRegisterCompletion;
