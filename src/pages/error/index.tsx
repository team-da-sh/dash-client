import { useNavigate } from 'react-router-dom';
import BoxButton from '@/components/BoxButton';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { IcError } from '@/assets/svg';
import { boxButtonStyle } from './index.css';

const Error = () => {
  const navigate = useNavigate();

  const handleHomeNavigation = () => {
    navigate(ROUTES_CONFIG.home.path);
  };

  return (
    <Flex
      direction="column"
      paddingLeft="2rem"
      paddingRight="2rem"
      paddingBottom="2.4rem"
      paddingTop="11.2rem"
      align="center"
      justify="center">
      <Flex direction="column" gap="1.4rem" align="center" marginBottom="2.9rem">
        <Head tag="h4">서비스 이용에 불편을 드려 죄송합니다.</Head>
        <Flex direction="column" align="center">
          <Text tag="b7">요청하신 페이지를 처리하는 도중 예기치 못한 에러가 발생했습니다.</Text>
          <Text tag="b7">다시 한 번 시도하거나 홈으로 이동해 주세요.</Text>
        </Flex>
      </Flex>
      <IcError />
      <BoxButton className={boxButtonStyle} onClick={handleHomeNavigation}>
        홈으로 이동
      </BoxButton>
    </Flex>
  );
};

export default Error;
