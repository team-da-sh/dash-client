import { useRef, useState } from 'react';
import {
  containerStyle,
  textAreaStyle,
} from '@/pages/instructorRegister/components/IntroductionSection/introductionSection.css';
import {
  INFO_KEY,
  MAX_INTRODUCTION_LENGTH,
  MIN_INTRODUCTION_LENGTH,
} from '@/pages/instructorRegister/constants/funnel';
import type { InstructorRegisterInfoTypes } from '@/pages/instructorRegister/types/InstructorRegisterInfoTypes';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface IntroductionSectionPropTypes {
  detail: string;
  isDetailError: boolean;
  handleDetailError: (isError: boolean) => void;
  onInfoChange: <K extends keyof InstructorRegisterInfoTypes>(key: K, value: InstructorRegisterInfoTypes[K]) => void;
}

const IntroductionSection = ({
  detail,
  onInfoChange,
  isDetailError,
  handleDetailError,
}: IntroductionSectionPropTypes) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const defineInputState = (isDetailError?: boolean, isFocused?: boolean) => {
    if (isDetailError) {
      return 'error';
    } else if (isFocused) {
      return 'focus';
    }
  };

  const inputState = defineInputState(isDetailError, isFocused);

  const handleTextareaValueChange = (value: string) => {
    if (value.length < MIN_INTRODUCTION_LENGTH || value.length > MAX_INTRODUCTION_LENGTH) {
      handleDetailError(true);
    } else {
      handleDetailError(false);
    }
    onInfoChange(INFO_KEY.DETAIL, value);
  };

  const handleTextArea = () => {
    const textArea = textAreaRef.current;
    if (textArea) {
      // Default 높이!
      textArea.style.height = '5.4rem';
      // 내용에 따라 높이 조정
      textArea.style.height = `${textArea.scrollHeight}px`;

      handleTextareaValueChange(textArea.value);
    }
  };

  const getCounterColor = (isError: boolean, isFocused: boolean, hasValue: boolean) => {
    if (isError) return 'alert3';
    if (isFocused) return 'main4';
    if (hasValue) return 'gray9';
    return 'gray4';
  };

  return (
    <div className={containerStyle}>
      <Text tag="b2_sb">강사 소개</Text>
      <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 4 })}>
        <textarea
          ref={textAreaRef}
          onInput={handleTextArea}
          value={detail}
          placeholder="저는 이런 댄서예요!"
          className={textAreaStyle({ defineInputState: inputState })}
          onFocus={handleFocus}
          onBlur={handleBlur}></textarea>

        <div className={sprinkles({ display: 'flex', justifyContent: 'space-between' })}>
          <Text tag="b3_r" color="alert3">
            {isDetailError ? '30자 이상 작성해 주세요' : ''}
          </Text>

          <Text tag="c1_m" color={getCounterColor(isDetailError, isFocused, !!detail)}>
            {`${detail.length}/${MAX_INTRODUCTION_LENGTH}`}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
