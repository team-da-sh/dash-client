import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Header from '@/common/components/Header/Header';
import { ApiErrorBoundary } from '@/shared/components/ErrorBoundary/ApiErrorBoundary/ApiErrorBoundary';
import GlobalErrorBoundary from '@/shared/components/ErrorBoundary/GlobalErrorBoundary/GlobalErrorBoundary';

const Layout = () => {
  const { pathname } = useLocation();

  const isSearchPath = pathname === ROUTES_CONFIG.search.path;
  const isOnboardingPath = pathname === ROUTES_CONFIG.onboarding.path;
  const isReservationPath = pathname.startsWith('/reservation/');
  const isWithdrawPath = pathname === ROUTES_CONFIG.withdraw.path;

  const shouldShowHeader = !isSearchPath && !isOnboardingPath && !isReservationPath && !isWithdrawPath;

  return (
    <GlobalErrorBoundary>
      <ApiErrorBoundary>
        {shouldShowHeader && <Header />}
        <Outlet />
        <ScrollRestoration />
      </ApiErrorBoundary>
    </GlobalErrorBoundary>
  );
};

export default Layout;
