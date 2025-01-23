import { useNavigate } from 'react-router-dom';
import BoxButton from '@/components/BoxButton';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { ClearGif } from '@/assets/gif';
import { buttonContainerStyle, clearStyle, flexCustomStyle, funnelContainerStyle } from './index.css';

const ClassRegisterCompletion = () => {
  const navigate = useNavigate();

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
        <BoxButton
          onClick={() => {
            navigate(ROUTES_CONFIG.home.path);
          }}>
          완료
        </BoxButton>
      </div>
    </>
  );
};

export default ClassRegisterCompletion;
