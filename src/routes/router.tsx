import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AuthGuard from '@/routes/guards/authGuard';
import GuestGuard from '@/routes/guards/guestGuard';
import { guestRoutes } from '@/routes/sections/guestRoutes';
import { protectedRoutes } from '@/routes/sections/protectedRoutes';
import { publicRoutes } from '@/routes/sections/publicRoutes';
import Layout from '@/layout/Layout';

const Error = lazy(() => import('@/pages/error/Error'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <GuestGuard />,
        children: [...guestRoutes],
      },

      ...publicRoutes,

      {
        element: <AuthGuard />,
        children: [...protectedRoutes],
      },

      { path: '*', element: <Error /> },
    ],
  },
]);
