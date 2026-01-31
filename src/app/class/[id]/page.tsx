'use client';

import { use } from 'react';
import { useGetLessonDetail } from '@/app/class/[id]/apis/queries';
import ClassButtonWrapper from '@/app/class/[id]/components/ClassButtonWrapper/ClassButtonWrapper';
import ClassInfoWrapper from '@/app/class/[id]/components/ClassInfoWrapper/ClassInfoWrapper';
import LimitedChip from '@/app/class/[id]/components/LimitedChip/LimitedChip';
import TabWrapper from '@/app/class/[id]/components/TabWrapper/TabWrapper';
import { LOW_SEAT_THRESHOLD } from '@/app/class/[id]/constants';
import { chipWrapperStyle, topImgStyle, withdrawIconStyle, withdrawImgStyle } from '@/app/class/[id]/index.css';
import ErrorPage from '@/app/error/ErrorPage';
import Divider from '@/common/components/Divider/Divider';
import Text from '@/common/components/Text/Text';
import IcCircleCautionFilled from '@/shared/assets/svg/IcCircleCautionFilled';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
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
}
