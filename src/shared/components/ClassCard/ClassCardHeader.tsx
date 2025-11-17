import type { RecruitingStatus } from '@/pages/mypage/components/mypageReservation/types/recruitingStatus';
import type { ReservationStatus } from '@/pages/mypage/components/mypageReservation/types/reservationStatus';
import SvgIcClear from '@/shared/assets/svg/IcClear';
import SvgIcMeatball from '@/shared/assets/svg/IcMeatball';
import * as styles from '@/shared/components/ClassCard/style.css';
import Divider from '@/shared/components/Divider/Divider';
import Text from '@/shared/components/Text/Text';
import { USER_ROLE } from '@/shared/constants/userRole';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import { vars } from '@/shared/styles/theme.css';
import { formatDate } from '@/shared/utils/timeCalculate';

const memberStatus = (status: ReservationStatus) => {
  switch (status) {
    case 'PENDING_APPROVAL':
      return [<SvgIcMeatball width={20} height={20} color={vars.colors.main03} />, '승인 대기'];
    case 'APPROVED':
      return [<SvgIcClear width={20} height={20} color={vars.colors.main03} />, '승인 완료'];
    case 'PENDING_CANCELLATION':
      return [<SvgIcMeatball width={20} height={20} color={vars.colors.alert01} />, '취소 대기'];
    case 'CANCELLED':
      return [<SvgIcClear width={20} height={20} color={vars.colors.alert01} />, '취소 완료'];
    case 'COMPLETED':
      return [<SvgIcClear width={20} height={20} color={vars.colors.main03} />, '수강 완료'];
    default:
      return [null, '상태 불명'];
  }
};

const teacherStatus = (status: RecruitingStatus) => {
  switch (status) {
    case 'APPLYING':
      return [<SvgIcMeatball width={20} color={vars.colors.main03} />, '모집 중'];
    case 'FINISHED':
      return [<SvgIcClear width={20} color={vars.colors.main03} />, '모집 완료'];
    default:
      return [null, '상태 불명'];
  }
};

interface ClassCardHeaderProps {
  role: keyof typeof USER_ROLE;
  status: ReservationStatus | RecruitingStatus;
  date: string;
}

const ClassCardHeader = ({ role, status, date }: ClassCardHeaderProps) => {
  const [statusIcon, statusText] =
    role === USER_ROLE.MEMBER ? memberStatus(status as ReservationStatus) : teacherStatus(status as RecruitingStatus);

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
              {`${formatDate(date)} ${role === USER_ROLE.MEMBER ? '신청' : '개설'}`}
            </Text>
          )}
        </div>
      </div>
      <Divider color="gray1" className={styles.dividerStyle} />
    </>
  );
};

export default ClassCardHeader;
