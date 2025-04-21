import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Header from '@/shared/components/Header/Header';

const Layout = () => {
  const location = useLocation();

  const isSearchPath = location.pathname === ROUTES_CONFIG.search.path;
  const isOnboardingPath = location.pathname === ROUTES_CONFIG.onboarding.path;

  const shouldHideHeader = isSearchPath || isOnboardingPath;

  return (
    <>
      {!shouldHideHeader && <Header />}
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
