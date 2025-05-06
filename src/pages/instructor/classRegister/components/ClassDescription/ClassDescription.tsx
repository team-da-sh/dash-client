import React, { forwardRef } from 'react';
import { textareaStyle } from '@/pages/instructor/classRegister/components/ClassDescription/classDescription.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface ClassDescriptionPropTypes {
  explanation: string;
  handleExplainTextArea: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ClassDescription = forwardRef<HTMLTextAreaElement, ClassDescriptionPropTypes>(
  ({ explanation, handleExplainTextArea }, ref) => {
    return (
      <div
        className={sprinkles({
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          width: '100%',
          mb: 40,
        })}>
        <Description title="클래스 설명" subTitle="예비 수강생들을 위해 클래스를 소개해 주세요" />
        <textarea
          ref={ref}
          value={explanation}
          onInput={handleExplainTextArea}
          placeholder="EX) 노래 제목, 회차별 커리큘럼, 진행 방식, 목표 등"
          className={textareaStyle}
          maxLength={300}
        />
      </div>
    );
  }
);

export default ClassDescription;
