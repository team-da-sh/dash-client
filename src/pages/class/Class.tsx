import { useParams } from 'react-router-dom';
import { useGetLessonDetail } from '@/pages/class/apis/queries';
import ClassButtonWrapper from '@/pages/class/components/ClassButtonWrapper/ClassButtonWrapper';
import ClassInfoWrapper from '@/pages/class/components/ClassInfoWrapper/ClassInfoWrapper';
import LimitedChip from '@/pages/class/components/LimitedChip/LimitedChip';
import TabWrapper from '@/pages/class/components/TabWrapper/TabWrapper';
import { LOW_SEAT_THRESHOLD } from '@/pages/class/constants';
import ErrorPage from '@/pages/error/ErrorPage';
import IcCircleCautionFilled from '@/shared/assets/svg/IcCircleCautionFilled';
import Divider from '@/shared/components/Divider/Divider';
import Text from '@/shared/components/Text/Text';
import { chipWrapperStyle, topImgStyle, withdrawIconStyle, withdrawImgStyle } from './class.css';

const Class = () => {
  const { id } = useParams<{ id: string }>();
  const lessonId = Number(id);

  const isValidLessonId = Number.isInteger(lessonId) && lessonId > 0;

  const { data, isPending, isError } = useGetLessonDetail(lessonId, {
    enabled: Boolean(isValidLessonId),
  });

  if (!isValidLessonId) {
    return <ErrorPage />;
  }

  if (isPending) {
    return <></>;
  }

  if (isError || !data) {
    return <ErrorPage />;
  }

  const imageUrl = data.imageUrl;
  const isWithdrawTeacher = !imageUrl;
  const remainingSeats = data.maxReservationCount - data.reservationCount;
  const shouldShowChip = data.status === 'OPEN' && remainingSeats < LOW_SEAT_THRESHOLD;

  return (
    <main>
      <section className={topImgStyle}>
        {isWithdrawTeacher ? (
          <div className={withdrawImgStyle}>
            <IcCircleCautionFilled width={54} height={54} className={withdrawIconStyle} />
            <Text tag="b1_sb" color="gray6">
              탈퇴한 유저의 클래스입니다.
            </Text>
            <Text tag="b1_sb" color="gray6">
              새로운 클래스를 탐색해 보세요!
            </Text>
          </div>
        ) : (
          <>
            <div className={topImgStyle} style={{ backgroundImage: `url(${imageUrl})` }} />
            {shouldShowChip && (
              <div className={chipWrapperStyle}>
                <LimitedChip lessonData={data} />
              </div>
            )}
          </>
        )}
      </section>

      <ClassInfoWrapper lessonData={data} />
      <Divider direction="horizontal" color="gray1" length="100%" thickness="0.8rem" />
      <TabWrapper colorScheme="tertiary" lessonData={data} />
      <ClassButtonWrapper lessonData={data} />
    </main>
  );
};

export default Class;
