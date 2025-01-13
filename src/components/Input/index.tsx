import { InputHTMLAttributes } from 'react';
import * as style from './index.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  helperText?: string;
}

const Input = ({ isError, helperText }: InputProps) => {
  return (
    <div className={style.containerStyle}>
      <input type="text" className={style.inputStyle({ isError })} placeholder="예시를 써주세요" />
      {helperText && <p className={style.helperTextStyle({ isError })}>{helperText}</p>}
    </div>
  );
};

export default Input;
