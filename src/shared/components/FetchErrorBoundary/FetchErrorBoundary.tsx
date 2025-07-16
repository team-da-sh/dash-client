import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { Suspense } from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import { errorContainerStyle, buttonContainer } from '@/shared/components/FetchErrorBoundary/fetchErrorBoundary.css';
import Spinner from '@/shared/components/Spinner/Spinner';
import Text from '@/shared/components/Text/Text';

export const FetchFallback = ({ resetErrorBoundary, error }: FallbackProps) => {
  if (error.status >= 500) {
    throw error;
  }

  return (
    <div className={errorContainerStyle}>
      <Text>{error.response.data.message}</Text>
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
    <ErrorBoundary FallbackComponent={FetchFallback} onReset={reset}>
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
