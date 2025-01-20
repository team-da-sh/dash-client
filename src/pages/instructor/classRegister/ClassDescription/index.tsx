import React, { forwardRef } from 'react';
import Flex from '@/components/Flex';
import Description from '../Description';
import { textareaStyle } from './index.css';

interface ClassDescriptionProps {
  explanation: string; // 클래스 설명 텍스트
  handleExplainTextArea: (event: React.ChangeEvent<HTMLTextAreaElement>) => void; // 설명 입력 핸들러
}

const ClassDescription = forwardRef<HTMLTextAreaElement, ClassDescriptionProps>(
  ({ explanation, handleExplainTextArea }, ref) => {
    return (
      <div>
        <Flex tag="section" direction="column" gap="2rem" width="100%" marginBottom="4rem">
          <Description title="클래스 설명" subTitle="예비 수강생들을 위해 클래스를 소개해 주세요" />
          <textarea
            ref={ref}
            value={explanation}
            onInput={handleExplainTextArea}
            placeholder="EX) 노래 제목, 회차별 커리큘럼, 진행 방식, 목표 등"
            className={textareaStyle}
          />
        </Flex>
      </div>
    );
  }
);

export default ClassDescription;
