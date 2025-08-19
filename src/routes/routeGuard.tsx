import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { useGetRole } from '@/shared/apis/queries';

const RouteGuard = () => {
  const { data, isLoading, error } = useGetRole();

  if (isLoading) return <div />;

  if (error || !data?.role) {
    return <Navigate to={ROUTES_CONFIG.login.path} replace />;
  }

  return <Outlet />;
};

export default RouteGuard;
