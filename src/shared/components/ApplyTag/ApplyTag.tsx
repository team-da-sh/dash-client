import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import type { ReservationStatus } from '@/pages/mypage/components/mypageReservation/types/reservationStatus';
import { tagStyle } from '@/shared/components/ApplyTag/applyTag.css';

interface TagProps extends ComponentPropsWithoutRef<'div'> {
  variant: Exclude<ReservationStatus, 'ALL'>;
}

const ApplyTag = ({ variant, children, className, ...props }: TagProps) => {
  return (
    <div className={clsx(className, tagStyle({ variant }))} {...props}>
      {children}
    </div>
  );
};

export default ApplyTag;
