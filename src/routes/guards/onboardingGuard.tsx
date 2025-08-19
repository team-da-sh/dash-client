import { Navigate, Outlet } from 'react-router-dom';
import { useGetRole } from '@/shared/apis/queries';
import { getAccessToken, getRefreshToken } from '@/shared/utils/handleToken';
import { ROUTES_CONFIG } from '../routesConfig';

const OnboardingGuard = () => {
  const hasToken = !!(getAccessToken() || getRefreshToken());

  const { data, isLoading, error } = useGetRole();

  if (!hasToken) {
    return <Navigate to={ROUTES_CONFIG.login.path} replace />;
  }
  if (isLoading) return <div />;

  if (data?.role) return <Navigate to={ROUTES_CONFIG.home.path} replace />;

  if (error) return <Outlet />;

  return <Outlet />;
};

export default OnboardingGuard;
