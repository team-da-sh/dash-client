import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { ApiErrorBoundary } from '@/shared/components/ApiErrorBoundary/ApiErrorBoundary';
import GlobalErrorBoundary from '@/shared/components/GlobalErrorBoundary/GlobalErrorBoundary';
import Header from '@/shared/components/Header/Header';

const Layout = () => {
  const { pathname } = useLocation();

  const isSearchPath = pathname === ROUTES_CONFIG.search.path;
  const isOnboardingPath = pathname === ROUTES_CONFIG.onboarding.path;

  const shouldShowHeader = !isSearchPath && !isOnboardingPath;

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
