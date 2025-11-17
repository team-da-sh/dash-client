import * as Sentry from '@sentry/react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import type { ErrorInfo } from 'react';
import { Suspense, type ReactNode } from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import {
  errorContainerStyle,
  buttonContainer,
} from '@/shared/components/ErrorBoundary/FetchErrorBoundary/fetchErrorBoundary.css';
import Spinner from '@/shared/components/Spinner/Spinner';
import Text from '@/shared/components/Text/Text';
import type { ApiError } from '@/shared/types/ApiError';
import { ERROR_LEVEL } from '@/shared/types/errorLevel';

const handleError = (error: Error | ApiError, errorInfo: ErrorInfo) => {
  if (!isAxiosError(error)) {
    throw error;
  }

  if (error.status && error.status >= 500) {
    throw error;
  }

  Sentry.withScope((scope) => {
    scope.setExtras({ componentStack: errorInfo.componentStack });
    scope.setLevel(ERROR_LEVEL.WARNING);

    const newError = new Error(error.message);
    newError.name = error.name;

    Sentry.captureException(newError);
  });
};

const FetchErrorFallback = ({ resetErrorBoundary, error }: FallbackProps) => {
  const errorMessage = isAxiosError(error) ? error.response?.data?.message || error.message : '오류가 발생했습니다';

  return (
    <div className={errorContainerStyle}>
      <Text>{errorMessage}</Text>
      <div className={buttonContainer}>
        <BoxButton variant="outline" onClick={resetErrorBoundary}>
          다시 시도하기
        </BoxButton>
      </div>
    </div>
  );
};

export const FetchErrorBoundary = ({ children }: { children: ReactNode }) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary FallbackComponent={FetchErrorFallback} onReset={reset} onError={handleError}>
      <Suspense
        fallback={
          <div className={errorContainerStyle}>
            <Spinner />
          </div>
        }>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};
