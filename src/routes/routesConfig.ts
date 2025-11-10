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
  mypage: {
    title: 'Mypage',
    path: '/mypage',
    withTab: (tab: string) => `/mypage?tab=${tab}`,
  },
  editProfile: {
    title: 'editProfile',
    path: '/mypage/edit',
  },
  mypageReservation: {
    title: 'MypageReservation',
    path: '/mypage/reservation',
  },
  mypageReservationDetail: {
    title: 'MypageReservationDetail',
    path: (id: string) => `/mypage/reservation/${id}`,
  },
  mypageCancelClass: {
    title: 'CancelClass',
    path: (id: string) => `/mypage/reservation/${id}/cancel`,
  },
  mypageCancelConfirm: {
    title: 'CancelConfirm',
    path: (id: string) => `/mypage/reservation/${id}/cancel/confirm`,
  },
  accountRegister: {
    title: 'AccountRegister',
    path: '/mypage/account-register',
  },
  classRegister: {
    title: 'ClassRegister',
    path: '/mypage/class-register',
  },
  classEdit: {
    title: 'ClassEdit',
    path: (id: string) => `/mypage/class-register/${id}/edit`,
  },
  classRegisterCompletion: {
    title: 'ClassRegisterCompletion',
    path: '/mypage/class-register/completion',
  },
  instructorRegister: {
    title: 'InstructorRegister',
    path: '/mypage/instructor-register',
  },
  instructorRegisterCompletion: {
    title: 'InstructorRegister',
    path: '/mypage/instructor-register/completion',
  },
  instructorClassList: {
    title: 'instructorClassList',
    path: '/mypage/instructor/class-list',
  },
  instructorClassDetail: {
    title: 'instructorClassDetail',
    path: (id: string) => `/mypage/instructor/class-list/${id}`,
  },
  withdraw: {
    title: 'Withdraw',
    path: '/mypage/withdraw',
  },
  error: {
    title: 'Error',
    path: '/error',
  },
};
