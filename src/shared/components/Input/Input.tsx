import clsx from 'clsx';
import type { ForwardedRef, InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef, useState } from 'react';
import * as style from '@/shared/components/Input/input.css';
import Text from '@/shared/components/Text/Text';

interface InputPropTypes extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  rightAddOn?: ReactNode;
  helperText?: string;
  hasLengthNumber?: boolean;
  value?: string;
  maxLength?: number;
}

const Input = (
  { isError, className, value, rightAddOn, helperText, hasLengthNumber, maxLength, ...props }: InputPropTypes,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

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
      <div className={style.containerStyle({ defineInputState: inputState })}>
        <input
          ref={ref}
          type="text"
          className={clsx(className, style.inputStyle)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          aria-invalid={isError ? 'true' : 'false'}
          {...props}
        />
        {rightAddOn}
      </div>

      <div className={style.optionalContainerStyle}>
        {isError && helperText && (
          <Text tag="b3_r" color="alert3">
            {helperText}
          </Text>
        )}
        {hasLengthNumber && (
          <div className={style.lengthContainerStyle}>
            <Text tag="c1_m" className={style.lengthTextStyle({ defineLengthState: lengthState })}>
              {value ? value.length : 0}
            </Text>
            <Text tag="c1_m" className={style.lengthTextStyle({ defineLengthState: lengthState })}>
              /
            </Text>
            <Text tag="c1_m" className={style.lengthTextStyle({ defineLengthState: lengthState })}>
              {maxLength}
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default forwardRef(Input);
