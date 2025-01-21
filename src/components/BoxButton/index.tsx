import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import { buttonStyle } from '@/components/BoxButton/index.css';

export interface BoxButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'temp' | 'heart';
  type: 'button' | 'reset' | 'submit' | undefined;
  isDisabled?: boolean;
}

const BoxButton = ({
  variant = 'primary',
  isDisabled = false,
  children,
  className,
  type,
  ...props
}: BoxButtonProps) => {
  console.log(type);
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
