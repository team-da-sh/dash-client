import type {
  ProgressStatus,
  ReservationStatus,
} from '@/pages/mypage/components/mypageReservation/types/reservationStatus';
import {
  cancelLineStyle,
  dotsLineStyle,
  progressContatiner,
  statusWrapper,
  textStyle,
} from '@/pages/mypage/components/mypageReservationDetail/components/ReservationProgress/ReservationProgress.css';
import SvgIcClear from '@/shared/assets/svg/IcClear';
import SvgIcMeatball from '@/shared/assets/svg/IcMeatball';
import Text from '@/shared/components/Text/Text';
import { vars } from '@/shared/styles/theme.css';

interface ReservationProgressProps {
  reservationStatus: ReservationStatus | ProgressStatus;
}

const ReservationProgress = ({ reservationStatus }: ReservationProgressProps) => {
  return reservationStatus === 'PENDING_CANCELLATION' || reservationStatus === 'CANCELLED' ? (
    <section className={progressContatiner}>
      <div className={statusWrapper}>
        <SvgIcMeatball width={24} height={24} color={vars.colors.alert01} />
        <Text tag="b3_sb" className={textStyle}>
          취소대기
        </Text>
      </div>
      <hr className={cancelLineStyle({ filled: reservationStatus === 'CANCELLED' })} />
      <div className={statusWrapper}>
        <SvgIcClear
          width={24}
          height={24}
          color={reservationStatus === 'CANCELLED' ? vars.colors.alert01 : vars.colors.gray04}
        />
        <Text tag="b3_sb" className={textStyle}>
          취소완료
        </Text>
      </div>
    </section>
  ) : (
    <section className={progressContatiner}>
      <div className={statusWrapper}>
        <SvgIcMeatball width={24} height={24} color={vars.colors.main03} />
        <Text tag="b3_sb" className={textStyle}>
          승인대기
        </Text>
      </div>
      <hr className={dotsLineStyle({ filled: reservationStatus !== 'PENDING_APPROVAL' })} />
      <div className={statusWrapper}>
        <SvgIcClear
          width={24}
          height={24}
          color={reservationStatus === 'PENDING_APPROVAL' ? vars.colors.gray04 : vars.colors.main03}
        />
        <Text tag="b3_sb" className={textStyle}>
          승인완료
        </Text>
      </div>{' '}
      <hr
        className={dotsLineStyle({
          filled: reservationStatus === 'APPROVED' || reservationStatus === 'IN_PROGRESS',
        })}
      />
      <div className={statusWrapper}>
        <SvgIcMeatball
          width={24}
          height={24}
          color={
            reservationStatus === 'IN_PROGRESS' || reservationStatus === 'COMPLETED'
              ? vars.colors.main03
              : vars.colors.gray04
          }
        />
        <Text tag="b3_sb" className={textStyle}>
          수강중
        </Text>
      </div>
      <hr className={dotsLineStyle({ filled: reservationStatus === 'COMPLETED' })} />
      <div className={statusWrapper}>
        <SvgIcClear
          width={24}
          height={24}
          color={reservationStatus === 'COMPLETED' ? vars.colors.main03 : vars.colors.gray04}
        />
        <Text tag="b3_sb" className={textStyle}>
          수강완료
        </Text>
      </div>
    </section>
  );
};

export default ReservationProgress;
