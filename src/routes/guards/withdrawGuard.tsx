import { Navigate, Outlet } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { useWithdrawStore } from '@/common/stores/withdraw';

const WithdrawGuard = () => {
  const [searchParams] = useSearchParams();
  const step = searchParams.get('step');

  const isValidatedWithdraw = useWithdrawStore((s) => s.isValidatedWithdraw);
  const isWithdrawCompleted = useWithdrawStore((s) => s.isWithdrawCompleted);

  const COMPLETION_STEP = '3';
  const isOnCompletionStep = step === COMPLETION_STEP;

  if (!isValidatedWithdraw) {
    return <Navigate to={ROUTES_CONFIG.mypage.path} replace />;
  }

  if (isOnCompletionStep && !isWithdrawCompleted) {
    return <Navigate to={ROUTES_CONFIG.withdraw.path} replace />;
  }

  return <Outlet />;
};

export default WithdrawGuard;
