import { HTMLAttributes } from 'react';
import { buttonStyle } from './index.css';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  isDisabled?: boolean;
}

const Button = ({ variant = 'primary', isDisabled = false, children, ...props }: ButtonProps) => {
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

export default Button;
