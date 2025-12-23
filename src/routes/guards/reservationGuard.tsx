// import { Navigate, Outlet, useParams } from 'react-router-dom';
// import { useGetLessonDetail } from '@/pages/class/apis/queries';
// import { ROUTES_CONFIG } from '@/routes/routesConfig';
// import { WITHDRAW_USER_NAME } from '@/shared/constants/withdrawUser';

// export const ReservationGuard = () => {
//   const { id } = useParams<{ id: string }>();
//   const lessonId = Number(id);

//   const isValidLessonId = Number.isInteger(lessonId) && lessonId > 0;

//   const { data, isPending, isError } = useGetLessonDetail(lessonId, {
//     enabled: isValidLessonId,
//   });

//   if (!isValidLessonId) {
//     return <Navigate to={ROUTES_CONFIG.error.path} replace />;
//   }

//   if (isPending) return null;

//   if (isError || !data) {
//     return <Navigate to={ROUTES_CONFIG.error.path} replace />;
//   }

//   const { status, bookStatus, teacherNickname, isMyLesson } = data;

//   const isButtonEnabled =
//     status === 'OPEN' && isMyLesson === false && bookStatus === false && teacherNickname !== WITHDRAW_USER_NAME;

//   if (!isButtonEnabled) {
//     return <Navigate to={ROUTES_CONFIG.class.path(lessonId.toString())} replace />;
//   }

//   return <Outlet />;
// };
