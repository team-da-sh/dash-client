import { createBrowserRouter } from 'react-router-dom';
import { LoginCallback } from '@/pages/auth';
import Class from '@/pages/class';
import Dancer from '@/pages/dancer';
import Error from '@/pages/error';
import Home from '@/pages/home';
import ClassDetail from '@/pages/instructor/classDetail';
import ClassList from '@/pages/instructor/classList';
import ClassRegister from '@/pages/instructor/classRegister';
import InstructorRegister from '@/pages/instructorRegister';
import Login from '@/pages/login';
import MyPageReservation from '@/pages/mypage/mypageReservation';
import MyPageReservationDetail from '@/pages/mypage/mypageReservationDetail';
import Onboarding from '@/pages/onboarding';
import Reservation from '@/pages/reservation';
import Search from '@/pages/search';
import { ROUTES_CONFIG } from './routesConfig';

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
