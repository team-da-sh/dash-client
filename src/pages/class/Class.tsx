import { useParams } from 'react-router-dom';
import { useGetLessonDetail } from '@/pages/class/apis/queries';
import * as styles from '@/pages/class/class.css';
import ClassButtonWrapper from '@/pages/class/components/ClassButtonWrapper/ClassButtonWrapper';
import ClassInfoWrapper from '@/pages/class/components/ClassInfoWrapper/ClassInfoWrapper';
import LimitedChip from '@/pages/class/components/LimitedChip/LimitedChip';
import TabWrapper from '@/pages/class/components/TabWrapper/TabWrapper';
import Error from '@/pages/error/Error';
import Divider from '@/shared/components/Divider/Divider';

const Class = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Error />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isError, isLoading } = useGetLessonDetail(id);
  console.log(data);
  if (isLoading) {
    return <></>;
  }

  if (isError || !data) {
    return <Error />;
  }

  const imageUrl = data.imageUrl;
  const remainingSeats = data.maxReservationCount - data.reservationCount;
  const shouldShowChip = data.status === 'OPEN' && remainingSeats < 10;

  return (
    <main>
      <div
        className={styles.headerStyle}
        style={{
          backgroundImage: `url(${imageUrl})`,
          position: 'relative',
        }}>
        {shouldShowChip && (
          <div
            style={{
              position: 'absolute',
              left: 20,
              bottom: 16,
            }}>
            <LimitedChip lessonData={data} />
          </div>
        )}
      </div>

      <ClassInfoWrapper lessonData={data} />
      <Divider direction="horizontal" color="gray1" length="100%" thickness="1.2rem" />
      <TabWrapper colorScheme="primary" lessonData={data} />
      <ClassButtonWrapper lessonData={data} />
    </main>
  );
};

export default Class;
