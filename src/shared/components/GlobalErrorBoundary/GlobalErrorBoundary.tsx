import type { ReactNode } from 'react';
import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import Loading from '@/pages/loading/Loading';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import * as style from '@/shared/components/GlobalErrorBoundary/globalErrorBoundary.css';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const IcError = lazy(() => import('@/shared/assets/svg/IcError'));

const GlobalErrorFallback = () => {
  const navigate = useNavigate();

  const handleHomeNavigation = () => {
    navigate(ROUTES_CONFIG.home.path);
    window.location.reload();
  };

  return (
    <main>
      <div className={style.containerStyle}>
        <header
          className={sprinkles({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 14,
            marginBottom: 29,
          })}>
          <Head tag="h5_sb">서비스 이용에 불편을 드려 죄송합니다.</Head>

          <section
            className={sprinkles({
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            })}>
            <Text tag="b3_m">요청하신 페이지를 처리하는 도중 예기치 못한 에러가 발생했어요.</Text>
            <Text tag="b3_m">다시 한 번 시도하거나 홈으로 이동해 주세요.</Text>
          </section>
        </header>
        <Suspense fallback={<div>Loading...</div>}>
          <IcError width={300} height={300} className={sprinkles({ width: '100%' })} />
        </Suspense>
      </div>

      <div className={style.buttonContainerStyle}>
        <BoxButton onClick={handleHomeNavigation}>홈으로 이동</BoxButton>
      </div>
    </main>
  );
};

const errorHandler = (error: Error) => {
  // 센트리로 로깅해야함
  console.log(error);
};

const GlobalErrorBoundary = ({ children }: { children: ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={GlobalErrorFallback} onError={errorHandler}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default GlobalErrorBoundary;
