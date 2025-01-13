import { HTMLAttributes } from 'react';
import { buttonStyle } from './index.css';

export interface BoxButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  isDisabled?: boolean;
}

const BoxButton = ({ variant = 'primary', isDisabled = false, children, ...props }: BoxButtonProps) => {
  return (
    <button
      className={buttonStyle({
        variant,
      })}
      disabled={isDisabled}
      {...props}>
      {children}
    </button>
  );
};

export default BoxButton;
