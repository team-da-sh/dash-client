import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import * as style from './index.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  helperText?: string;
}

const Input = ({ isError, helperText, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div className={style.containerStyle}>
      <input ref={ref} type="text" className={style.inputStyle({ isError })} placeholder="예시를 써주세요" {...props} />
      {helperText && <p className={style.helperTextStyle({ isError })}>{helperText}</p>}
    </div>
  );
};

export default forwardRef(Input);
