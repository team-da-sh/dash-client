import type { RecruitingStatus } from '@/app/mypage/(student)/reservations/types/recruitingStatus';
import type { ReservationStatus } from '@/app/mypage/(student)/reservations/types/reservationStatus';
import Divider from '@/common/components/Divider/Divider';
import Text from '@/common/components/Text/Text';
import SvgIcClear from '@/shared/assets/svg/IcClear';
import SvgIcMeatball from '@/shared/assets/svg/IcMeatball';
import { dividerStyle, headerWrapperStyle, headerContentStyle } from '@/shared/components/ClassCard/style.css';
import { USER_ROLE } from '@/shared/constants/userRole';
import { vars } from '@/shared/styles/theme.css';
import { formatDateToKR } from '@/shared/utils/date';

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
      <div className={headerWrapperStyle}>
        <div className={headerContentStyle}>
          {statusIcon}
          <Text tag="b1_sb">{statusText}</Text>
          {date && (
            <Text tag="b3_r" color="gray7">
              {`${formatDateToKR(date)} ${role === USER_ROLE.MEMBER ? '신청' : '개설'}`}
            </Text>
          )}
        </div>
      </div>
      <Divider color="gray1" className={dividerStyle} />
    </>
  );
};

export default ClassCardHeader;
