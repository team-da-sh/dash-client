import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { getAccessToken, getRefreshToken } from '@/shared/utils/handleToken';

const AuthGuard = () => {
  const hasToken = !!(getAccessToken() || getRefreshToken());

  if (!hasToken) {
    return <Navigate to={ROUTES_CONFIG.login.path} replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
