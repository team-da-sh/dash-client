import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AccountRegister from '@/pages/accountRegister/AccountRegister';
import { LoginCallback } from '@/pages/auth/auth';
import EditProfile from '@/pages/editProfiles/EditProfile';
import Home from '@/pages/home/Home';
import ClassRegisterCompletion from '@/pages/instructor/classRegisterCompletion/ClassRegisterCompletion';
import InstructorRegisterCompletion from '@/pages/instructorRegisterCompletion/InstructorRegisterCompletion';
import MyPage from '@/pages/mypage/MyPage';
import Layout from '@/layout/Layout';
import { ROUTES_CONFIG } from './routesConfig';

const Login = lazy(() => import('@/pages/login/Login'));
const Onboarding = lazy(() => import('@/pages/onboarding/Onboarding'));
const Search = lazy(() => import('@/pages/search/Search'));
const Class = lazy(() => import('@/pages/class/Class'));
const Dancer = lazy(() => import('@/pages/dancer/Dancer'));
const Reservation = lazy(() => import('@/pages/reservation/Reservation'));
const MyPageReservation = lazy(() => import('@/pages/mypage/components/mypageReservation/MypageReservation.tsx'));
const MyPageReservationDetail = lazy(
  () => import('@/pages/mypage/components/mypageReservationDetail/MypageReservationDetail.tsx')
);
const MypageCancelClass = lazy(() => import('@/pages/mypage/components/mypageCancelClass/MypageCancelClass'));
const CancelConfirmPage = lazy(() => import('@/pages/mypage/components/CancelConfirmPage/CancelConfirmPage'));
const ClassRegister = lazy(() => import('@/pages/instructor/classRegister/ClassRegister'));
const InstructorRegister = lazy(() => import('@/pages/instructorRegister/InstructorRegister'));
const ClassDetail = lazy(() => import('@/pages/instructor/classDetail/ClassDetail'));
const ErrorPage = lazy(() => import('@/pages/error/ErrorPage'));
const LessonManage = lazy(() => import('@/pages/instructor/lessonManage/LessonManage'));

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
      { path: ROUTES_CONFIG.mypage.path, element: <MyPage /> },
      { path: ROUTES_CONFIG.editProfile.path, element: <EditProfile /> },
      { path: ROUTES_CONFIG.mypageReservation.path, element: <MyPageReservation /> },
      { path: ROUTES_CONFIG.mypageReservationDetail.path(':id'), element: <MyPageReservationDetail /> },
      { path: ROUTES_CONFIG.accountRegister.path, element: <AccountRegister /> },
      { path: ROUTES_CONFIG.mypageCancelClass.path(':id'), element: <MypageCancelClass /> },
      { path: ROUTES_CONFIG.mypageCancelConfirm.path(':id'), element: <CancelConfirmPage /> },
      { path: ROUTES_CONFIG.classRegister.path, element: <ClassRegister /> },
      { path: ROUTES_CONFIG.classRegisterCompletion.path, element: <ClassRegisterCompletion /> },
      { path: ROUTES_CONFIG.instructorRegister.path, element: <InstructorRegister /> },
      { path: ROUTES_CONFIG.instructorRegisterCompletion.path, element: <InstructorRegisterCompletion /> },
      { path: ROUTES_CONFIG.instructorClassDetail.path(':id'), element: <ClassDetail /> },
      { path: '*', element: <ErrorPage /> },
      { path: ROUTES_CONFIG.instructorClassList.path, element: <LessonManage /> },
    ],
  },
]);
