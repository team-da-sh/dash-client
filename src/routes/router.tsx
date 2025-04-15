import { createBrowserRouter } from 'react-router-dom';
import { LoginCallback } from '@/pages/auth/auth';
import Class from '@/pages/class/Class';
import Dancer from '@/pages/dancer/Dancer';
import Error from '@/pages/error/Error';
import Home from '@/pages/home/Home';
import ClassDetail from '@/pages/instructor/classDetail/ClassDetail';
import ClassList from '@/pages/instructor/classList/ClassList';
import ClassRegister from '@/pages/instructor/classRegister/ClassRegister';
import ClassRegisterCompletion from '@/pages/instructor/classRegisterCompletion/ClassRegisterCompletion';
import InstructorRegister from '@/pages/instructorRegister/InstructorRegister';
import Login from '@/pages/login/Login';
import MyPageReservation from '@/pages/mypage/mypageReservation/MypageReservation';
import MyPageReservationDetail from '@/pages/mypage/mypageReservationDetail/MypageReservationDetail';
import Onboarding from '@/pages/onboarding/Onboarding';
import Reservation from '@/pages/reservation/Reservation';
import { CheckoutPage } from '@/pages/reservation/components/TossPayments/CheckOut/CheckOut';
import { FailPage } from '@/pages/reservation/components/TossPayments/Fail/Fail';
import { SuccessPage } from '@/pages/reservation/components/TossPayments/Success/Success';
import Search from '@/pages/search/Search';
import Layout from '@/layout/Layout';
import { ROUTES_CONFIG } from './routesConfig';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: ROUTES_CONFIG.home.path, element: <Home /> },
      { path: ROUTES_CONFIG.login.path, element: <Login /> },
      { path: ROUTES_CONFIG.auth.path, element: <LoginCallback /> },
      { path: ROUTES_CONFIG.onboarding.path, element: <Onboarding /> },
      { path: ROUTES_CONFIG.search.path, element: <Search /> },
      { path: ROUTES_CONFIG.class.path(':id'), element: <Class /> },
      { path: ROUTES_CONFIG.dancer.path(':id'), element: <Dancer /> },
      { path: ROUTES_CONFIG.reservation.path(':id'), element: <Reservation /> },
      { path: ROUTES_CONFIG.mypageReservation.path, element: <MyPageReservation /> },
      { path: ROUTES_CONFIG.mypageReservationDetail.path(':id'), element: <MyPageReservationDetail /> },
      { path: ROUTES_CONFIG.classRegister.path, element: <ClassRegister /> },
      { path: ROUTES_CONFIG.classRegisterCompletion.path, element: <ClassRegisterCompletion /> },
      { path: ROUTES_CONFIG.instructorRegister.path, element: <InstructorRegister /> },
      { path: ROUTES_CONFIG.instructorClassDetail.path(':id'), element: <ClassDetail /> },
      { path: ROUTES_CONFIG.instructorClassList.path, element: <ClassList /> },
      { path: ROUTES_CONFIG.payments.path, element: <CheckoutPage /> },
      { path: ROUTES_CONFIG.paymentsSuccess.path, element: <SuccessPage /> },
      { path: ROUTES_CONFIG.paymentsFail.path, element: <FailPage /> },
      { path: '*', element: <Error /> },
    ],
  },
]);
