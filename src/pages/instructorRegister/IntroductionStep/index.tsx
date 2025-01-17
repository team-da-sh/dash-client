import { useRef } from 'react';
import Description from '@/pages/instructorRegister/Description';
import { textAreaStyle } from '@/pages/instructorRegister/IntroductionStep/index.css';

const IntroductionStep = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = '5.4rem'; // Default 높이!
      textArea.style.height = `${textArea.scrollHeight}px`; // 내용에 따라 높이 조정
    }
  };

  return (
    <>
      <Description title="소개글 작성" subTitle="댄서 메인테인 님에 대해 30자 이상 작성해 주세요" />
      <textarea
        ref={textAreaRef}
        onInput={handleInput}
        placeholder="저는 이런 댄서예요!"
        className={textAreaStyle}></textarea>
    </>
  );
};

export default IntroductionStep;
