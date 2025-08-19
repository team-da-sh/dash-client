import { ROUTES_CONFIG } from '@/routes/routesConfig';

export const protectedRoutes = [
  ROUTES_CONFIG.reservation.path(':id'),
  ROUTES_CONFIG.payments.path,
  ROUTES_CONFIG.paymentsSuccess.path,
  ROUTES_CONFIG.paymentsFail.path,

  ROUTES_CONFIG.mypage.path,
  ROUTES_CONFIG.mypage.withTab(':tab'),
  ROUTES_CONFIG.editProfile.path,
  ROUTES_CONFIG.mypageReservation.path,
  ROUTES_CONFIG.mypageReservationDetail.path(':id'),

  ROUTES_CONFIG.classRegister.path,
  ROUTES_CONFIG.classRegisterCompletion.path,
  ROUTES_CONFIG.instructorRegister.path,
  ROUTES_CONFIG.instructorRegisterCompletion.path,
  ROUTES_CONFIG.instructorClassList.path,
  ROUTES_CONFIG.instructorClassDetail.path(':id'),
];
