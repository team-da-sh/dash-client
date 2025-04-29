import { useRef } from 'react';
import {
  containerStyle,
  detailLengthTextStyle,
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

  const handleTextareaChange = (value: string) => {
    if (value.length < MIN_INTRODUCTION_LENGTH || value.length > MAX_INTRODUCTION_LENGTH) {
      handleDetailError(true);
    } else {
      handleDetailError(false);
    }
    onInfoChange(INFO_KEY.DETAIL, value);
  };

  const handleInput = () => {
    const textArea = textAreaRef.current;
    if (textArea) {
      // Default 높이!
      textArea.style.height = '5.4rem';
      // 내용에 따라 높이 조정
      textArea.style.height = `${textArea.scrollHeight}px`;

      handleTextareaChange(textArea.value);
    }
  };

  return (
    <div className={containerStyle}>
      <Text tag="b2_sb">강사 소개</Text>
      <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 4 })}>
        <textarea
          ref={textAreaRef}
          onInput={handleInput}
          value={detail}
          placeholder="저는 이런 댄서예요!"
          className={textAreaStyle}></textarea>
        <Text tag="c1_m" color={isDetailError ? 'alert3' : 'main4'} className={detailLengthTextStyle}>
          {`${detail.length}/${MAX_INTRODUCTION_LENGTH}`}
        </Text>
      </div>
    </div>
  );
};

export default IntroductionSection;
