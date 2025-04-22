import { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { boxButtonStyle } from '@/pages/error/error.css';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';

const IcError = lazy(() => import('@/shared/assets/svg/IcError'));

const Error = () => {
  const navigate = useNavigate();

  const handleHomeNavigation = () => {
    navigate(ROUTES_CONFIG.home.path);
    window.location.reload();
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
        <Head tag="h5_sb">서비스 이용에 불편을 드려 죄송합니다.</Head>
        <Flex direction="column" align="center">
          <Text tag="b3_m">요청하신 페이지를 처리하는 도중 예기치 못한 에러가 발생했습니다.</Text>
          <Text tag="b3_m">다시 한 번 시도하거나 홈으로 이동해 주세요.</Text>
        </Flex>
      </Flex>
      <Suspense fallback={<div>Loading...</div>}>
        <IcError />
      </Suspense>
      <BoxButton className={boxButtonStyle} onClick={handleHomeNavigation}>
        홈으로 이동
      </BoxButton>
    </Flex>
  );
};

export default Error;
