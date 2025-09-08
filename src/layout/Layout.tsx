import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Header from '@/shared/components/Header/Header';

const Layout = () => {
  const { pathname } = useLocation();

  const isSearchPath = pathname === ROUTES_CONFIG.search.path;
  const isOnboardingPath = pathname === ROUTES_CONFIG.onboarding.path;
  const isReservationPath = pathname.startsWith('/reservation/');

  const shouldShowHeader = !isSearchPath && !isOnboardingPath && !isReservationPath;

  return (
    <>
      {shouldShowHeader && <Header />}
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
