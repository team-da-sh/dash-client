import { useNavigate } from 'react-router-dom';
import {
  buttonContainerStyle,
  clearStyle,
  flexCustomStyle,
  funnelContainerStyle,
} from '@/pages/instructor/classRegisterCompletion/classRegisterCompletion.css';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { ClearGif } from '@/shared/assets/gif';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';

const ClassRegisterCompletion = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate(ROUTES_CONFIG.home.path);
  };

  return (
    <>
      <Flex className={funnelContainerStyle}>
        <Flex direction="column" gap="0.8rem" width="100%" className={flexCustomStyle}>
          <Flex direction="column">
            <Head level="h1" tag="h2">
              축하드립니다 <br />
              클래스 개설이 완료되었어요
            </Head>
          </Flex>
          <Text tag="b2" color="gray7">
            방금 등록한 클래스는 마이페이지에서 관리할 수 있어요
          </Text>
          <img src={ClearGif} alt="완료 페이지 캐릭터" className={clearStyle} />
        </Flex>
      </Flex>
      <div className={buttonContainerStyle}>
        <BoxButton onClick={handleComplete}>완료</BoxButton>
      </div>
    </>
  );
};

export default ClassRegisterCompletion;
