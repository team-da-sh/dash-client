import { Outlet } from 'react-router-dom';
import { useGetRole } from '@/shared/apis/queries';

const OnboardingGuard = () => {
  const { isLoading, error } = useGetRole();

  if (isLoading) return <div />;

  if (error) return <Outlet />;

  return <Outlet />;
};

export default OnboardingGuard;
