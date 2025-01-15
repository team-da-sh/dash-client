import clsx from 'clsx';
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import * as style from './index.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  isSearch?: boolean;
}

const Input = ({ isError, isSearch = false, className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <input
      ref={ref}
      type="text"
      className={clsx(className, style.inputStyle({ isError, isSearch }))}
      placeholder="예시를 써주세요"
      {...props}
    />
  );
};

export default forwardRef(Input);
