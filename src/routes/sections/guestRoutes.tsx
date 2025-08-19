import { lazy } from 'react';
import { LoginCallback } from '@/pages/auth/auth';
import { ROUTES_CONFIG } from '@/routes/routesConfig';

const Login = lazy(() => import('@/pages/login/Login'));
const Onboarding = lazy(() => import('@/pages/onboarding/Onboarding'));

export const guestRoutes = [
  { path: ROUTES_CONFIG.login.path, element: <Login /> },
  { path: ROUTES_CONFIG.auth.path, element: <LoginCallback /> },
  { path: ROUTES_CONFIG.onboarding.path, element: <Onboarding /> },
];
