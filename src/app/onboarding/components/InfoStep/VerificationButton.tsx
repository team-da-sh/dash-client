'use client';

import type { ButtonHTMLAttributes } from 'react';
import { verificationButtonStyle } from '@/app/onboarding/components/InfoStep/infoStep.css';

interface VerificationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'resend';
  isDisabled?: boolean;
}

const VerificationButton = ({
  variant = 'default',
  isDisabled = false,
  children,
  ...props
}: VerificationButtonProps) => {
  return (
    <button
      className={verificationButtonStyle({ variant })}
      disabled={isDisabled}
      type="button"
      {...props}>
      {children}
    </button>
  );
};

export default VerificationButton;
