import { Navigate, Outlet, useParams } from 'react-router-dom';
import { useGetLessonDetail } from '@/pages/class/apis/queries';
import { ROUTES_CONFIG } from '@/routes/routesConfig';

export const ReservationGuard = () => {
  const { id } = useParams<{ id: string }>();
  const lessonId = Number(id);

  const isValidLessonId = Number.isInteger(lessonId) && lessonId > 0;

  const { data, isPending, isError } = useGetLessonDetail(lessonId, {
    enabled: isValidLessonId,
  });

  if (isPending) return null;

  if (isError || !data) {
    return <Navigate to={ROUTES_CONFIG.error.path} replace />;
  }

  const { status, bookStatus, teacherNickname, isMyLesson } = data;

  const isButtonEnabled =
    status === 'OPEN' && isMyLesson === false && bookStatus === false && teacherNickname !== '알 수 없음';

  if (!isButtonEnabled) {
    return <Navigate to={ROUTES_CONFIG.class.path(lessonId.toString())} replace />;
  }

  return <Outlet />;
};
