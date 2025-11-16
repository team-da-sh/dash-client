import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { useWithdrawStore } from '@/common/stores/withdraw';

const WithdrawGuard = () => {
  const { search } = useLocation();
  const step = new URLSearchParams(search).get('step');
  const isValidatedWithdraw = useWithdrawStore((s) => s.isValidatedWithdraw);
  const isWithdrawCompleted = useWithdrawStore((s) => s.isWithdrawCompleted);

  if (!isValidatedWithdraw) {
    return <Navigate to={ROUTES_CONFIG.mypage.path} replace />;
  }

  if (step === '3' && !isWithdrawCompleted) {
    return <Navigate to={ROUTES_CONFIG.withdraw.path} replace />;
  }

  return <Outlet />;
};

export default WithdrawGuard;
