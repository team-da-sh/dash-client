import clsx from 'clsx';
import { ForwardedRef, forwardRef, InputHTMLAttributes, useState } from 'react';
import * as style from './index.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  isSearch?: boolean;
}

const Input = (
  { isError, isSearch = false, className, value, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const hasValue = value !== undefined && value !== null && value !== '';

  return (
    <input
      ref={ref}
      type="text"
      className={clsx(
        className,
        style.inputStyle({
          isError: hasValue ? isError : undefined,
          isSearch,
        }),
        { [style.focusStyle]: isFocused && !hasValue }
      )}
      onFocus={handleFocus}
      onBlur={handleBlur}
      value={value}
      {...props}
    />
  );
};

export default forwardRef(Input);
