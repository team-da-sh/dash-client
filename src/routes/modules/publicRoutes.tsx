import { lazy } from 'react';
import Home from '@/pages/home/Home';
import { ROUTES_CONFIG } from '@/routes/routesConfig';

const Search = lazy(() => import('@/pages/search/Search'));

export const publicRoutes = [
  { path: ROUTES_CONFIG.home.path, element: <Home /> },
  { path: ROUTES_CONFIG.search.path, element: <Search /> },
];
