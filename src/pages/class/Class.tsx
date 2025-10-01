import { useParams } from 'react-router-dom';
import { useGetLessonDetail } from '@/pages/class/apis/queries';
import * as styles from '@/pages/class/class.css';
import ClassButtonWrapper from '@/pages/class/components/ClassButtonWrapper/ClassButtonWrapper';
import ClassInfoWrapper from '@/pages/class/components/ClassInfoWrapper/ClassInfoWrapper';
import LimitedChip from '@/pages/class/components/LimitedChip/LimitedChip';
import TabWrapper from '@/pages/class/components/TabWrapper/TabWrapper';
import { LOW_SEAT_THRESHOLD } from '@/pages/class/constants';
import ErrorPage from '@/pages/error/ErrorPage';
import Divider from '@/shared/components/Divider/Divider';

const Class = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <ErrorPage />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isError, isLoading } = useGetLessonDetail(+id);

  if (isLoading) {
    return <></>;
  }

  if (isError || !data) {
    return <ErrorPage />;
  }

  const imageUrl = data.imageUrl;
  const remainingSeats = data.maxReservationCount - data.reservationCount;
  const shouldShowChip = data.status === 'OPEN' && remainingSeats < LOW_SEAT_THRESHOLD;

  return (
    <main>
      <section
        className={styles.topImgStyle}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}>
        {shouldShowChip && (
          <div className={styles.chipWrapperStyle}>
            <LimitedChip lessonData={data} />
          </div>
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
