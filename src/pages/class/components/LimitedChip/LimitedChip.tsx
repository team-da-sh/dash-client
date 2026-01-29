import * as styles from '@/pages/class/components/LimitedChip/limitedChip.css';
import type { LessonDetailResponseTypes } from '@/pages/class/types/api';
import Text from '@/common/components/Text/Text';
import IcThunderMain0424 from '@/shared/assets/svg/IcThunderMain0424';
import { vars } from '@/shared/styles/theme.css';

const LimitedChip = ({ lessonData }: { lessonData: LessonDetailResponseTypes }) => {
  const { maxReservationCount, reservationCount } = lessonData;
  const remainingSeats = maxReservationCount - reservationCount;

  return (
    <div className={styles.cardStyle}>
      <IcThunderMain0424 width={'18'} color={vars.colors.alert01} />
      <Text tag="b3_sb" color="gray1">
        마감까지 {remainingSeats}명 남았어요!
      </Text>
    </div>
  );
};

export default LimitedChip;
