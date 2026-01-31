import { lazy } from 'react';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Home from '@/app/pages';

const Search = lazy(() => import('@/app/search/page'));
const Dancer = lazy(() => import('@/pages/dancer/Dancer'));

export const publicRoutes = [
  { path: ROUTES_CONFIG.home.path, element: <Home /> },
  { path: ROUTES_CONFIG.search.path, element: <Search /> },
  { path: ROUTES_CONFIG.dancer.path(':id'), element: <Dancer /> },
];
