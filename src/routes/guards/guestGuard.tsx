import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { getAccessToken, getRefreshToken } from '@/shared/utils/handleToken';

const GuestGuard = () => {
  const hasToken = !!(getAccessToken() || getRefreshToken());

  if (hasToken) return <Navigate to={ROUTES_CONFIG.home.path} replace />;

  return <Outlet />;
};

export default GuestGuard;
