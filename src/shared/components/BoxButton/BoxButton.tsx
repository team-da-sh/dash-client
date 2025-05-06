import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';
import { buttonStyle } from '@/shared/components/BoxButton/boxButton.css';

export interface BoxButtonPropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'temp' | 'heart';
  type?: 'button' | 'reset' | 'submit' | undefined;
  isDisabled?: boolean;
}

const BoxButton = ({
  variant = 'primary',
  isDisabled = false,
  children,
  className,
  type = 'button',
  ...props
}: BoxButtonPropTypes) => {
  return (
    <button
      className={clsx(
        className,
        buttonStyle({
          variant,
        })
      )}
      disabled={isDisabled}
      type={type}
      {...props}>
      {children}
    </button>
  );
};

export default BoxButton;
