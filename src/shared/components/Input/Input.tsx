import clsx from 'clsx';
import type { ForwardedRef, InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import * as style from '@/shared/components/Input/input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  rightAddOn?: ReactNode;
  isFocused?: boolean;
}

const Input = (
  { isError, className, value, rightAddOn, isFocused, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const inputState = isError ? 'error' : isFocused ? 'focus' : undefined;

  return (
    <div className={style.containerStyle({ defineInputState: inputState })}>
      <input
        ref={ref}
        type="text"
        className={clsx(className, style.inputStyle)}
        value={value}
        {...props}
        aria-invalid={isError ? 'true' : 'false'}
      />
      {rightAddOn}
    </div>
  );
};

export default forwardRef(Input);
