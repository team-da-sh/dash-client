import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import { buttonStyle } from '@/components/BoxButton/index.css';

export interface BoxButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
}: BoxButtonProps) => {
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
