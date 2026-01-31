/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import AccountRegister from '@/pages/accountRegister/AccountRegister';
import EditProfile from '@/pages/editProfiles/EditProfile';
import InstructorRegisterCompletion from '@/pages/instructorRegisterCompletion/InstructorRegisterCompletion';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import ClassRegisterCompletion from '@/app/mypage/(instructor)/class-register/completion/ClassRegisterCompletion';
import MyPage from '@/app/mypage/MyPage';
import Withdraw from '@/app/mypage/components/Withdraw/Withdraw';

const Reservation = lazy(() => import('@/pages/reservation/Reservation'));
const MyPageReservation = lazy(() => import('@/app/mypage/components/mypageReservation/MypageReservation'));
const MyPageReservationDetail = lazy(
  () => import('@/app/mypage/components/mypageReservationDetail/MypageReservationDetail')
);
const ClassRegister = lazy(() => import('@/app/mypage/(instructor)/class-register/ClassRegister'));
const InstructorRegister = lazy(() => import('@/pages/instructorRegister/InstructorRegister'));
const ClassDetail = lazy(() => import('@/app/instructor/class-list/[id]/ClassDetail'));
const LessonManage = lazy(() => import('@/app/instructor/class-list/LessonManage'));
const MyPageCancelClass = lazy(() => import('@/app/mypage/components/mypageCancelClass/MypageCancelClass'));
const MyPageCancelConfirm = lazy(() => import('@/app/mypage/components/CancelConfirmPage/CancelConfirmPage'));

const Class = lazy(() => import('@/pages/class/Class'));

export const protectedRoutes = [
  { path: ROUTES_CONFIG.reservation.path(':id'), element: <Reservation /> },
  { path: ROUTES_CONFIG.class.path(':id'), element: <Class /> },

  { path: ROUTES_CONFIG.mypage.path, element: <MyPage /> },
  { path: ROUTES_CONFIG.mypage.withTab(':tab'), element: <MyPage /> }, // withTab은 같은 컴포넌트라 MyPage 그대로
  { path: ROUTES_CONFIG.editProfile.path, element: <EditProfile /> },
  { path: ROUTES_CONFIG.mypageReservation.path, element: <MyPageReservation /> },
  { path: ROUTES_CONFIG.mypageReservationDetail.path(':id'), element: <MyPageReservationDetail /> },
  { path: ROUTES_CONFIG.mypageCancelClass.path(':id'), element: <MyPageCancelClass /> },
  { path: ROUTES_CONFIG.mypageCancelConfirm.path(':id'), element: <MyPageCancelConfirm /> },

  { path: ROUTES_CONFIG.accountRegister.path, element: <AccountRegister /> },
  { path: ROUTES_CONFIG.instructorClassList.path, element: <LessonManage /> },
  { path: ROUTES_CONFIG.classRegister.path, element: <ClassRegister /> },
  { path: ROUTES_CONFIG.classEdit.path(':id'), element: <ClassRegister /> },
  { path: ROUTES_CONFIG.classRegisterCompletion.path, element: <ClassRegisterCompletion /> },
  { path: ROUTES_CONFIG.instructorRegister.path, element: <InstructorRegister /> },
  { path: ROUTES_CONFIG.instructorRegisterCompletion.path, element: <InstructorRegisterCompletion /> },
  { path: ROUTES_CONFIG.instructorClassList.path, element: <LessonManage /> },
  { path: ROUTES_CONFIG.instructorClassDetail.path(':id'), element: <ClassDetail /> },
  { path: ROUTES_CONFIG.withdraw.path, element: <Withdraw /> },
];
