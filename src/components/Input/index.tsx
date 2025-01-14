import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import * as style from './index.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const Input = ({ isError, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <input ref={ref} type="text" className={style.inputStyle({ isError })} placeholder="예시를 써주세요" {...props} />
  );
};

export default forwardRef(Input);
