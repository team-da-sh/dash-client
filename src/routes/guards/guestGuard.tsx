import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { useGetRole } from '@/shared/apis/queries';

const GuestGuard = () => {
  const { data, isLoading } = useGetRole();

  if (isLoading) return <div />;

  if (data?.role) return <Navigate to={ROUTES_CONFIG.home.path} replace />;

  return <Outlet />;
};

export default GuestGuard;
