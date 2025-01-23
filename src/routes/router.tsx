import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { LoginCallback } from '@/pages/auth';
import { ROUTES_CONFIG } from './routesConfig';

const Home = lazy(() => import('@/pages/home'));
const Login = lazy(() => import('@/pages/login'));
const Onboarding = lazy(() => import('@/pages/onboarding'));
const Search = lazy(() => import('@/pages/search'));
const Class = lazy(() => import('@/pages/class'));
const Dancer = lazy(() => import('@/pages/dancer'));
const Reservation = lazy(() => import('@/pages/reservation'));
const MyPageReservation = lazy(() => import('@/pages/mypage/mypageReservation'));
const MyPageReservationDetail = lazy(() => import('@/pages/mypage/mypageReservationDetail'));
const ClassRegister = lazy(() => import('@/pages/instructor/classRegister'));
const InstructorRegister = lazy(() => import('@/pages/instructorRegister'));
const ClassDetail = lazy(() => import('@/pages/instructor/classDetail'));
const ClassList = lazy(() => import('@/pages/instructor/classList'));
const Error = lazy(() => import('@/pages/error'));

export const router = createBrowserRouter([
  {
    path: ROUTES_CONFIG.home.path,
    element: <Home />,
  },
  {
    path: ROUTES_CONFIG.login.path,
    element: <Login />,
  },
  {
    path: ROUTES_CONFIG.auth.path,
    element: <LoginCallback />,
  },
  {
    path: ROUTES_CONFIG.onboarding.path,
    element: <Onboarding />,
  },
  {
    path: ROUTES_CONFIG.search.path,
    element: <Search />,
  },
  {
    path: ROUTES_CONFIG.class.path,
    element: <Class />,
  },
  {
    path: ROUTES_CONFIG.dancer.path,
    element: <Dancer />,
  },
  {
    path: ROUTES_CONFIG.reservation.path,
    element: <Reservation />,
  },
  {
    path: ROUTES_CONFIG.mypageReservation.path,
    element: <MyPageReservation />,
  },
  {
    path: ROUTES_CONFIG.mypageReservationDetail.path,
    element: <MyPageReservationDetail />,
  },
  {
    path: ROUTES_CONFIG.classRegister.path,
    element: <ClassRegister />,
  },
  {
    path: ROUTES_CONFIG.instructorRegister.path,
    element: <InstructorRegister />,
  },
  {
    path: ROUTES_CONFIG.instructorClassDetail.path,
    element: <ClassDetail />,
  },
  {
    path: ROUTES_CONFIG.instructorClassList.path,
    element: <ClassList />,
  },
  {
    path: '*',
    element: <Error />,
  },
]);
