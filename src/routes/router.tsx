import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AuthGuard from '@/routes/guards/authGuard';
import GuestGuard from '@/routes/guards/guestGuard';
import { guestRoutes } from '@/routes/sections/guestRoutes';
import { protectedRoutes } from '@/routes/sections/protectedRoutes';
import { publicRoutes } from '@/routes/sections/publicRoutes';
import Layout from '@/layout/Layout';
import OnboardingGuard from './guards/onboardingGuard';
import { ROUTES_CONFIG } from './routesConfig';

const Error = lazy(() => import('@/pages/error/Error'));
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

      { path: '*', element: <Error /> },
    ],
  },
]);
