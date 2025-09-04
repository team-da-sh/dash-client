import * as styles from '@/pages/instructor/classDetail/components/StudentCard/studentCard.css';
import { formatPhoneNumber } from '@/pages/instructor/utils/format';
import { STATUS_KOREAN_MAP } from '@/pages/mypage/components/mypageReservation/MypageReservation';
import type { ReservationStatus } from '@/pages/mypage/components/mypageReservation/types/reservationStatus';
import ApplyTag from '@/shared/components/ApplyTag/ApplyTag';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';

interface studentsPropTypes {
  name: string;
  phoneNumber: string;
  createdAt: string;
  reservationStatus: Exclude<ReservationStatus, 'ALL'>;
}

interface StudentCardPropTypes {
  studentData: studentsPropTypes;
  index: number;
}

const STATUS_BUTTON_MAP: Record<
  Exclude<ReservationStatus, 'ALL'>,
  { text: string; variant: 'outline' | 'quaternary' }
> = {
  PENDING_APPROVAL: { text: '승인 확정', variant: 'outline' },
  APPROVED: { text: '승인 대기로 변경', variant: 'quaternary' },
  PENDING_CANCELLATION: { text: '취소 확정', variant: 'outline' },
  CANCELLED: { text: '취소 대기로 변경', variant: 'quaternary' },
};

const StudentCard = ({ studentData, index }: StudentCardPropTypes) => {
  const { text: buttonText, variant: buttonVariant } = STATUS_BUTTON_MAP[studentData.reservationStatus];

  return (
    <section className={styles.cardContainerStyle}>
      <section className={styles.leftWrapper}>
        <Head level="h2" tag="b1_sb">
          {index + 1}
        </Head>

        <div className={styles.infoWrapper}>
          <div className={styles.nameWrapper}>
            <Head level="h2" tag="b1_sb">
              {studentData.name}
            </Head>
            <ApplyTag variant={studentData.reservationStatus}>
              {STATUS_KOREAN_MAP[studentData.reservationStatus]}
            </ApplyTag>
          </div>
          <Text tag="b3_r" color="gray7">
            {formatPhoneNumber(studentData.phoneNumber)}
          </Text>
        </div>
      </section>

      <section className={styles.rightWrapper}>
        <Text tag="c1_r" color="gray9">
          {studentData.createdAt}
        </Text>
        <BoxButton variant={buttonVariant}>{buttonText}</BoxButton>
      </section>
    </section>
  );
};

export default StudentCard;
