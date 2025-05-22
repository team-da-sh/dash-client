import { useLayoutEffect, useRef, useState } from 'react';
import type { FieldError, UseFormRegister } from 'react-hook-form';
import {
  containerStyle,
  textAreaStyle,
} from '@/pages/instructorRegister/components/IntroductionSection/introductionSection.css';
import {
  INSTRUCTOR_REGISTER_PLACEHOLDER,
  MAX_INTRODUCTION_LENGTH,
} from '@/pages/instructorRegister/constants/registerSection';
import type { instructorRegisterFormTypes } from '@/pages/instructorRegister/types/instructorRegisterForm';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface IntroductionSectionPropTypes {
  detail: string;
  register: UseFormRegister<instructorRegisterFormTypes>;
  error: FieldError | undefined;
}

const IntroductionSection = ({ detail, register, error }: IntroductionSectionPropTypes) => {
  const [isFocused, setIsFocused] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const { name, onBlur, ref, onChange } = register('detail');

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    onBlur(e);
  };

  // textarea 높이 자동으로 조절
  useLayoutEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [detail]);

  const defineInputState = (error?: boolean, isFocused?: boolean) => {
    if (error) {
      return 'error';
    } else if (isFocused) {
      return 'focus';
    }
  };

  const getCounterColor = (isError: boolean, isFocused: boolean, hasValue: boolean) => {
    if (isError) return 'alert3';
    if (isFocused) return 'main4';
    if (hasValue) return 'gray9';
    return 'gray4';
  };

  const inputState = defineInputState(!!error, isFocused);
  const counterColor = getCounterColor(!!error, isFocused, !!detail);

  return (
    <section className={containerStyle}>
      <Text tag="b2_sb">강사 소개</Text>
      <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 8 })}>
        <textarea
          id="introduction-textarea"
          name={name}
          ref={(e) => {
            ref(e);
            textAreaRef.current = e;
          }}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={detail}
          placeholder={INSTRUCTOR_REGISTER_PLACEHOLDER.INTRODUCTION}
          className={textAreaStyle({ defineInputState: inputState })}
          maxLength={MAX_INTRODUCTION_LENGTH}
          rows={1}
        />

        <div className={sprinkles({ display: 'flex', justifyContent: 'space-between' })}>
          <Text tag="b3_r" color="alert3">
            {error && error.message}
          </Text>

          <div className={sprinkles({ display: 'flex', gap: 2 })}>
            <Text tag="c1_m" color={counterColor}>
              {detail.length}
            </Text>
            <Text tag="c1_m" color={counterColor}>
              /
            </Text>
            <Text tag="c1_m" color={counterColor}>
              {MAX_INTRODUCTION_LENGTH}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
