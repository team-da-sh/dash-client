import { useState } from 'react';
import type { FieldError, UseFormRegister } from 'react-hook-form';
import {
  containerStyle,
  textAreaStyle,
} from '@/pages/instructorRegister/components/IntroductionSection/introductionSection.css';
import { MAX_INTRODUCTION_LENGTH } from '@/pages/instructorRegister/constants/registerSection';
import type { InstructorRegisterInfoTypes } from '@/pages/instructorRegister/types/InstructorRegisterInfoTypes';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import type { instructorRegisterFormTypes } from '../../types/instructorRegisterForm';

interface IntroductionSectionPropTypes {
  detail: string;
  register: UseFormRegister<instructorRegisterFormTypes>;
  error: FieldError | undefined;

  onInfoChange: <K extends keyof InstructorRegisterInfoTypes>(key: K, value: InstructorRegisterInfoTypes[K]) => void;
}

const IntroductionSection = ({ detail, register, error }: IntroductionSectionPropTypes) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

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

  const handleTextAreaHeight = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const textArea = e.target as HTMLTextAreaElement;

    if (textArea) {
      textArea.style.height = '5.4rem';
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  };

  return (
    <section className={containerStyle}>
      <Text tag="b2_sb">강사 소개</Text>
      <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 4 })}>
        <textarea
          {...register('detail', {
            onChange: handleTextAreaHeight,
          })}
          value={detail}
          placeholder="저는 이런 댄서예요!"
          className={textAreaStyle({ defineInputState: inputState })}
          onFocus={handleFocus}
          onBlur={handleBlur}
          maxLength={MAX_INTRODUCTION_LENGTH}
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
