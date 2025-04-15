import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Header from '@/shared/components/Header/Header';

const Layout = () => {
  const location = useLocation();

  const hideHeaderPaths = [ROUTES_CONFIG.search.path, ROUTES_CONFIG.onboarding.path];

  // 현재 경로가 hideHeaderPaths 중 하나로 시작하는지 확인
  const shouldHideHeader = hideHeaderPaths.some(
    (path) => location.pathname === path || location.pathname.startsWith(`${path}`)
  );

  return (
    <>
      {!shouldHideHeader && <Header />}
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
