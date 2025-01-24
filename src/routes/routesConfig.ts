export const ROUTES_CONFIG = {
  home: {
    title: 'Home',
    path: '/',
  },
  login: {
    title: 'Login',
    path: '/login',
  },
  auth: {
    title: 'Auth',
    path: '/auth',
  },
  onboarding: {
    title: 'Onboarding',
    path: '/onboarding',
  },
  search: {
    title: 'Search',
    path: '/search',
  },
  class: {
    title: 'Class',
    path: (id: string) => `/class/${id}`,
  },
  dancer: {
    title: 'Dancer',
    path: (id: string) => `/dancer/${id}`,
  },
  reservation: {
    title: 'Reservation',
    path: (id: string) => `/reservation/${id}`,
  },
  payments: {
    title: 'payments',
    path: '/reservation/payments',
  },
  paymentsSuccess: {
    title: 'paymentsSuccess',
    path: '/reservation/payments/success',
  },
  paymentsFail: {
    title: 'paymentsFail',
    path: '/reservation/payments/fail',
  },
  mypageReservation: {
    title: 'MypageReservation',
    path: '/mypage/reservation',
  },
  mypageReservationDetail: {
    title: 'MypageReservationDetail',
    path: (id: string) => `/mypage/reservation/${id}`,
  },
  classRegister: {
    title: 'ClassRegister',
    path: '/mypage/class-register',
  },
  classRegisterCompletion: {
    title: 'ClassRegisterCompletion',
    path: '/mypage/class-register/completion'
  },
  instructorRegister: {
    title: 'InstructorRegister',
    path: '/mypage/instructor-register',
  },
  instructorClassList: {
    title: 'instructorClassList',
    path: '/mypage/instructor/class-list',
  },
  instructorClassDetail: {
    title: 'instructorClassDetail',
    path: (id: string) => `/mypage/instructor/class-list/${id}`,
  },
  error: {
    title: 'Error',
    path: '/error',
  },
};
