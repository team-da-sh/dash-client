import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Withdraw from '@/pages/mypage/components/Withdraw/Withdraw';
import AuthGuard from '@/routes/guards/authGuard';
import GuestGuard from '@/routes/guards/guestGuard';
import OnboardingGuard from '@/routes/guards/onboardingGuard';
import WithdrawGuard from '@/routes/guards/withdrawGuard';
import { guestRoutes } from '@/routes/modules/guestRoutes';
import { protectedRoutes } from '@/routes/modules/protectedRoutes';
import { publicRoutes } from '@/routes/modules/publicRoutes';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Layout from '@/layout/Layout';

/* eslint-disable react-refresh/only-export-components */
const Error = lazy(() => import('@/pages/error/ErrorPage'));
const Onboarding = lazy(() => import('@/pages/onboarding/Onboarding'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <GuestGuard />,
        children: [...guestRoutes],
      },
      { element: <OnboardingGuard />, children: [{ path: ROUTES_CONFIG.onboarding.path, element: <Onboarding /> }] },

      ...publicRoutes,

      {
        element: <AuthGuard />,
        children: [...protectedRoutes],
      },

      {
        path: ROUTES_CONFIG.withdraw.path,
        element: <WithdrawGuard />,
        children: [{ index: true, element: <Withdraw /> }],
      },

      { path: '*', element: <Error /> },
    ],
  },
]);
