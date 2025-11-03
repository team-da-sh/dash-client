/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import EditProfile from '@/pages/editProfiles/EditProfile';
import ClassRegisterCompletion from '@/pages/instructor/classRegisterCompletion/ClassRegisterCompletion';
import InstructorRegisterCompletion from '@/pages/instructorRegisterCompletion/InstructorRegisterCompletion';
import MyPage from '@/pages/mypage/MyPage';
import { ROUTES_CONFIG } from '@/routes/routesConfig';

const Reservation = lazy(() => import('@/pages/reservation/Reservation'));
const MyPageReservation = lazy(() => import('@/pages/mypage/components/mypageReservation/MypageReservation.tsx'));
const MyPageReservationDetail = lazy(
  () => import('@/pages/mypage/components/mypageReservationDetail/MypageReservationDetail.tsx')
);
const ClassRegister = lazy(() => import('@/pages/instructor/classRegister/ClassRegister'));
const InstructorRegister = lazy(() => import('@/pages/instructorRegister/InstructorRegister'));
const ClassDetail = lazy(() => import('@/pages/instructor/classDetail/ClassDetail'));
const LessonList = lazy(() => import('@/pages/instructor/lessonList/LessonList'));

export const protectedRoutes = [
  { path: ROUTES_CONFIG.reservation.path(':id'), element: <Reservation /> },

  { path: ROUTES_CONFIG.mypage.path, element: <MyPage /> },
  { path: ROUTES_CONFIG.mypage.withTab(':tab'), element: <MyPage /> }, // withTab은 같은 컴포넌트라 MyPage 그대로
  { path: ROUTES_CONFIG.editProfile.path, element: <EditProfile /> },
  { path: ROUTES_CONFIG.mypageReservation.path, element: <MyPageReservation /> },
  { path: ROUTES_CONFIG.mypageReservationDetail.path(':id'), element: <MyPageReservationDetail /> },

  { path: ROUTES_CONFIG.classRegister.path, element: <ClassRegister /> },
  { path: ROUTES_CONFIG.classRegisterCompletion.path, element: <ClassRegisterCompletion /> },
  { path: ROUTES_CONFIG.instructorRegister.path, element: <InstructorRegister /> },
  { path: ROUTES_CONFIG.instructorRegisterCompletion.path, element: <InstructorRegisterCompletion /> },
  { path: ROUTES_CONFIG.instructorClassDetail.path(':id'), element: <ClassDetail /> },
  { path: ROUTES_CONFIG.instructorClassList.path, element: <LessonList status="ALL" /> },
];
