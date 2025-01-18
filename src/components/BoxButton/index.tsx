import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import { buttonStyle } from '@/components/BoxButton/index.css';

export interface BoxButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'temp';
  isDisabled?: boolean;
}

const BoxButton = ({ variant = 'primary', isDisabled = false, children, className, ...props }: BoxButtonProps) => {
  return (
    <button
      className={clsx(
        className,
        buttonStyle({
          variant,
        })
      )}
      disabled={isDisabled}
      {...props}>
      {children}
    </button>
  );
};

export default BoxButton;
