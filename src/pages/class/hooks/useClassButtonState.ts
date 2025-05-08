import type { StatusType } from '@/pages/class/types/api';
import { BUTTON_TEXT } from '@/shared/constants';

export const useClassButtonState = (
  status: StatusType,
  bookStatus?: boolean
): { buttonText: string; isDisabled: boolean } => {
  if (bookStatus) {
    return {
      buttonText: BUTTON_TEXT.OPEN.BOOKED,
      isDisabled: true,
    };
  }

  const statusToButtonMap: Record<StatusType, { buttonText: string; isDisabled: boolean }> = {
    OPEN: {
      buttonText: BUTTON_TEXT.OPEN.AVAILABLE,
      isDisabled: false,
    },
    EXPIRED: {
      buttonText: BUTTON_TEXT.EXPIRED,
      isDisabled: true,
    },
    OVER_BOOKED: {
      buttonText: BUTTON_TEXT.OVER_BOOKED,
      isDisabled: true,
    },
  };

  return (
    statusToButtonMap[status] ?? {
      buttonText: '',
      isDisabled: false,
    }
  );
};
