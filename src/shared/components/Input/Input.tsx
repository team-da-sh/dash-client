import clsx from 'clsx';
import type { ForwardedRef, InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import * as style from '@/shared/components/Input/input.css';

interface InputPropTypes extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  isFocused?: boolean;
  rightAddOn?: ReactNode;
  onFocusChange?: (isFocused: boolean) => void;
}

const Input = (
  { isError, className, value, rightAddOn, isFocused, onFocusChange, ...props }: InputPropTypes,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const defineInputState = (isError?: boolean, isFocused?: boolean) => {
    if (isError) return 'error';
    if (isFocused) return 'focus';
    return undefined;
  };

  const inputState = defineInputState(isError, isFocused);

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
