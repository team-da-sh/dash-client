import { HTMLAttributes, ReactNode } from 'react';
import { buttonStyle } from './index.css';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary';
  isDisabled?: boolean;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
}

const Button = ({
  variant = 'primary',
  isDisabled = false,
  prefixIcon,
  suffixIcon,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonStyle({
        variant,
      })}
      disabled={isDisabled}
      {...props}>
      {prefixIcon && prefixIcon}
      {children}
      {suffixIcon && suffixIcon}
    </button>
  );
};

export default Button;
