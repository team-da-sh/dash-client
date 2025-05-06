import { BUTTON_TEXT } from '@/shared/constants';

export const useClassButtonState = (
  status: string,
  bookStatus?: boolean
): { buttonText: string; isDisabled: boolean } => {
  if (bookStatus) {
    return {
      buttonText: BUTTON_TEXT.OPEN.BOOKED,
      isDisabled: true,
    };
  }

  if (status === 'OPEN') {
    return {
      buttonText: BUTTON_TEXT.OPEN.AVAILABLE,
      isDisabled: false,
    };
  }

  if (status === 'EXPIRED' || status === 'OVER_BOOKED') {
    return {
      buttonText: BUTTON_TEXT[status],
      isDisabled: true,
    };
  }

  return {
    buttonText: '',
    isDisabled: false,
  };
};
