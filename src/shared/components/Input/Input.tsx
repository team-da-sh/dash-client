import clsx from 'clsx';
import type { ForwardedRef, InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef, useState } from 'react';
import * as style from '@/shared/components/Input/input.css';
import Text from '@/shared/components/Text/Text';

interface InputPropTypes extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  rightAddOn?: ReactNode;
  helperText?: string;
  showMaxLength?: boolean;
  value?: string;
  maxLength?: number;
}

const Input = (
  { isError, className, value, rightAddOn, helperText, showMaxLength, maxLength, ...props }: InputPropTypes,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [isFocused, setIsFocused] = useState(false);

  const defineInputState = (isError?: boolean, isFocused?: boolean) => {
    if (isError) return 'error';
    if (isFocused) return 'focus';
    return undefined;
  };

  const defineLengthState = (isError?: boolean, isFocused?: boolean) => {
    if (isError) return 'error';
    if (isFocused) return 'focus';
    if (value && value.length > 0) return 'filled';
    return undefined;
  };

  const inputState = defineInputState(isError, isFocused);
  const lengthState = defineLengthState(isError, isFocused);

  return (
    <div className={style.allContainerStyle}>
      <div className={style.containerStyle({ state: inputState })}>
        <input
          {...props}
          ref={ref}
          type="text"
          value={value}
          className={clsx(className, style.inputStyle)}
          onFocus={() => setIsFocused(true)}
          // onBlur={() => setIsFocused(false)}
          // TODO: RHF + Input 설계 맞는 방향일지 검토 필요
          onBlur={(e) => {
            props.onBlur?.(e);
            setIsFocused(false);
          }}
          maxLength={maxLength}
          aria-invalid={isError ? 'true' : 'false'}
        />
        {rightAddOn}
      </div>

      <div className={style.optionalContainerStyle}>
        {helperText && (
          <Text tag="b3_r" color="alert3">
            {helperText}
          </Text>
        )}
        {showMaxLength && (
          <div className={style.lengthContainerStyle}>
            <Text tag="c1_m" className={style.lengthTextStyle({ state: lengthState })}>
              {value ? value.length : 0}
            </Text>
            <Text tag="c1_m" className={style.lengthTextStyle({ state: lengthState })}>
              /
            </Text>
            <Text tag="c1_m" className={style.lengthTextStyle({ state: lengthState })}>
              {maxLength}
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default forwardRef(Input);
