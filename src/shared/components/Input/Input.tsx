import clsx from 'clsx';
import type { ForwardedRef, InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef, useState } from 'react';
import * as style from '@/shared/components/Input/input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  rightAddOn?: ReactNode;
}

const Input = (
  { isError, className, value, rightAddOn, onFocus, onBlur, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const defineInputState = (isError?: boolean, isFocused?: boolean) => {
    if (isError) {
      return 'error';
    } else if (isFocused) {
      return 'focus';
    }
  };

  const inputState = defineInputState(isError, isFocused);

  return (
    <div className={style.containerStyle({ defineInputState: inputState })}>
      <input
        ref={ref}
        type="text"
        className={clsx(className, style.inputStyle)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        {...props}
        aria-invalid={isError ? 'true' : 'false'}
      />
      {rightAddOn}
    </div>
  );
};

export default forwardRef(Input);
