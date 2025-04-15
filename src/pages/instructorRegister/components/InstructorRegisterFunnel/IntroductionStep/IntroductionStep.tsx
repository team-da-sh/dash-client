import { useRef } from 'react';
import Description from '@/pages/instructorRegister/components/Description/Description';
import { textAreaStyle } from '@/pages/instructorRegister/components/InstructorRegisterFunnel/IntroductionStep/introductionStep.css';
import { INFO_KEY } from '@/pages/instructorRegister/constants/funnel';
import type { InstructorRegisterInfoTypes } from '@/pages/instructorRegister/types/InstructorRegisterInfoTypes';

interface IntroductionStepProps {
  detail: string;
  onInfoChange: <K extends keyof InstructorRegisterInfoTypes>(key: K, value: InstructorRegisterInfoTypes[K]) => void;
}

const IntroductionStep = ({ detail, onInfoChange }: IntroductionStepProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextareaChange = (value: string) => {
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
    <>
      <Description title="소개글 작성" subTitle="댄서님에 대해 30자 이상 작성해 주세요" />
      <textarea
        ref={textAreaRef}
        onInput={handleInput}
        value={detail}
        placeholder="저는 이런 댄서예요!"
        className={textAreaStyle}></textarea>
    </>
  );
};

export default IntroductionStep;
