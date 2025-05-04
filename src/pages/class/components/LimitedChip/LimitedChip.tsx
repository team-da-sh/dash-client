import * as styles from '@/pages/class/components/LimitedChip/limitedChip.css';
import type { LessonDetailResponseTypes } from '@/pages/class/types/api';
import IcThunderMain0424 from '@/shared/assets/svg/IcThunderMain0424';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import { vars } from '@/shared/styles/theme.css';

const LimitedChip = ({ lessonData }: { lessonData: LessonDetailResponseTypes }) => {
  const { maxReservationCount, reservationCount } = lessonData;
  // 남은 예약 가능 인원 계산
  const remainingSeats = maxReservationCount - reservationCount;

  const isSoldOut = remainingSeats <= 0;
  const remainingText = isSoldOut ? '신청 마감된 수업이에요' : `${remainingSeats}`;
  const iconColor = isSoldOut ? vars.colors.alert03 : vars.colors.main04;
  const textColor = isSoldOut ? 'alert3' : 'main4';

  return (
    <>
      <div className={styles.cardStyle}>
        <IcThunderMain0424 width={'2.4rem'} color={iconColor} className={sprinkles({ mr: 4 })} />
        <Text tag="b2_m" color="black">
          {isSoldOut ? '' : '마감까지'}
        </Text>
        <Text tag="b2_m" color={textColor}>
          {remainingText}
        </Text>
        <Text tag="b2_m" color="black">
          {isSoldOut ? '' : '명 남았어요!'}
        </Text>
      </div>
    </>
  );
};

export default LimitedChip;
