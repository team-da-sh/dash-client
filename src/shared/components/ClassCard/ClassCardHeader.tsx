import type { RecruitingStatus } from '@/pages/mypage/components/mypageReservation/types/recruitingStatus';
import type { ReservationStatus } from '@/pages/mypage/components/mypageReservation/types/reservationStatus';
import SvgIcClearAlert20 from '@/shared/assets/svg/IcClearAlert20';
import SvgIcClearMain0320 from '@/shared/assets/svg/IcClearMain0320';
import SvgIcMeatballAlert20 from '@/shared/assets/svg/IcMeatballAlert20';
import SvgIcMeatballMain0320 from '@/shared/assets/svg/IcMeatballMain0320';
import * as styles from '@/shared/components/ClassCard/style.css';
import Divider from '@/shared/components/Divider/Divider';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import { formatDate } from '@/shared/utils/timeCalculate';

const studentStatus = (status: ReservationStatus) => {
  switch (status) {
    case 'PENDING_APPROVAL':
      return [<SvgIcMeatballMain0320 width={20} height={20} />, '승인 대기'];
    case 'APPROVED':
      return [<SvgIcClearMain0320 width={20} height={20} />, '승인 완료'];
    case 'PENDING_CANCELLATION':
      return [<SvgIcMeatballAlert20 width={20} height={20} />, '취소 대기'];
    case 'CANCELLED':
      return [<SvgIcClearAlert20 width={20} height={20} />, '취소 완료'];
    default:
      return [null, '상태 불명'];
  }
};

const teacherStatus = (status: RecruitingStatus) => {
  switch (status) {
    case 'APPLYING':
      return [<SvgIcMeatballMain0320 width={20} />, '모집 중'];
    case 'FINISHED':
      return [<SvgIcClearMain0320 width={20} />, '모집 완료'];
    default:
      return [null, '상태 불명'];
  }
};

interface ClassCardHeaderProps {
  role: 'teacher' | 'student';
  status: ReservationStatus | RecruitingStatus;
  date: string;
}

const ClassCardHeader = ({ role, status, date }: ClassCardHeaderProps) => {
  const [statusIcon, statusText] =
    role === 'student' ? studentStatus(status as ReservationStatus) : teacherStatus(status as RecruitingStatus);

  return (
    <>
      <div
        className={sprinkles({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        })}>
        <div
          className={sprinkles({
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          })}>
          {statusIcon}
          <Text tag="b1_sb">{statusText}</Text>
          {date && (
            <Text tag="b3_r" color="gray7">
              {`${formatDate(date)} ${role === 'student' ? '신청' : '개설'}`}
            </Text>
          )}
        </div>
      </div>
      <Divider color="gray1" className={styles.dividerStyle} />
    </>
  );
};

export default ClassCardHeader;
