import type { AxiosError } from 'axios';
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostPhoneRequest, usePostPhoneVerify } from '@/pages/onboarding/apis/queries';
import type { tokenTypes } from '@/pages/onboarding/types/api';
import type { phoneVerifyTypes } from '@/pages/onboarding/types/onboardInfoTypes';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { notify } from '@/shared/components/Toast/Toast';
import { PHONE_AUTH_MESSAGES, REQUEST_DELAY, TIMER_DURATION } from '@/shared/constants/userInfo';
import { useVerificationTimer } from '@/shared/hooks/useVerificationTimer';
import { getAccessToken } from '@/shared/utils/handleToken';

interface VerificationState {
  code: string;
  isVisible: boolean;
  isVerified: boolean;
}

type VerificationAction =
  | { type: 'REQUEST_START' }
  | { type: 'CODE_CHANGE'; payload: string }
  | { type: 'VERIFY_SUCCESS' }
  | { type: 'VERIFY_FAIL' }
  | { type: 'RESET' };

const initialVerificationState: VerificationState = {
  code: '',
  isVisible: false,
  isVerified: false,
};

function verificationReducer(state: VerificationState, action: VerificationAction): VerificationState {
  switch (action.type) {
    case 'REQUEST_START':
      return { code: '', isVisible: true, isVerified: false };
    case 'CODE_CHANGE':
      return { ...state, code: action.payload };
    case 'VERIFY_SUCCESS':
      return { ...state, isVerified: true };
    case 'VERIFY_FAIL':
      return { ...state, isVerified: false };
    case 'RESET':
      return initialVerificationState;
    default:
      return state;
  }
}

export const useVerification = (phoneNumber: string) => {
  const navigate = useNavigate();
  const accessToken = getAccessToken();

  const { mutate: requestPhoneMutate } = usePostPhoneRequest();
  const { mutate: verifyPhoneMutate } = usePostPhoneVerify();

  const [state, dispatch] = useReducer(verificationReducer, initialVerificationState);
  const { code } = state;

  const { isRunning, formattedTime, startTimer, seconds, resetTimer } = useVerificationTimer(TIMER_DURATION);

  const isApproachingTimerEnd = seconds > TIMER_DURATION - REQUEST_DELAY;
  const shouldSendRequest = isRunning && isApproachingTimerEnd;

  const handleRequestVerification = (): void => {
    if (!accessToken) {
      notify({ message: '로그인이 필요합니다.', icon: 'fail', bottomGap: 'large' });
      navigate(ROUTES_CONFIG.login.path);
      return;
    }

    if (shouldSendRequest) {
      notify({ message: PHONE_AUTH_MESSAGES.TRY_AGAIN, icon: 'fail', bottomGap: 'large' });
      return;
    }

    requestPhoneMutate(
      { phoneNumber, accessToken },
      {
        onSuccess: () => {
          dispatch({ type: 'REQUEST_START' });
          startTimer();
          notify({ message: PHONE_AUTH_MESSAGES.CODE_SENT, icon: 'success', bottomGap: 'large' });
        },
        onError: (error: AxiosError) => {
          const status = error.response?.status;
          if (status === 400) {
            notify({ message: PHONE_AUTH_MESSAGES.LIMIT_EXCEEDED, icon: 'fail', bottomGap: 'large' });
          } else if (status === 409) {
            notify({ message: PHONE_AUTH_MESSAGES.DUPLICATE_PHONE, icon: 'fail', bottomGap: 'large' });
          } else {
            notify({ message: PHONE_AUTH_MESSAGES.SEND_FAILED, icon: 'fail', bottomGap: 'large' });
          }
        },
      }
    );
  };

  const handleVerifyCode = (): void => {
    if (!accessToken) {
      notify({ message: '로그인이 필요합니다.', icon: 'fail', bottomGap: 'large' });
      navigate(ROUTES_CONFIG.login.path);
      return;
    }

    verifyPhoneMutate({ phoneNumber, code, accessToken } as phoneVerifyTypes & tokenTypes, {
      onSuccess: (data: { success?: boolean }) => {
        if (data?.success) {
          dispatch({ type: 'VERIFY_SUCCESS' });
          resetTimer();
          notify({ message: PHONE_AUTH_MESSAGES.VERIFIED_SUCCESS, icon: 'success', bottomGap: 'large' });
        } else {
          dispatch({ type: 'VERIFY_FAIL' });
          notify({ message: PHONE_AUTH_MESSAGES.CODE_MISMATCH, icon: 'fail', bottomGap: 'large' });
        }
      },
      onError: (error: AxiosError<{ message?: string }>) => {
        const status = error.response?.status;
        const message =
          status === 409
            ? PHONE_AUTH_MESSAGES.CODE_MISMATCH
            : error.response?.data?.message || PHONE_AUTH_MESSAGES.TRY_AGAIN;
        dispatch({ type: 'VERIFY_FAIL' });
        notify({ message, icon: 'fail', bottomGap: 'large' });
      },
    });
  };

  return {
    state,
    dispatch,
    handleRequestVerification,
    handleVerifyCode,
    formattedTime,
    isRunning,
    resetTimer,
  };
};
