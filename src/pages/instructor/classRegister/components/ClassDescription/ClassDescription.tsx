import React, { forwardRef } from 'react';
import { textareaStyle } from '@/pages/instructor/classRegister/components/ClassDescription/classDescription.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import {
  CLASS_DESCRIPTION_PLACEHOLDER,
  CLASS_DESCRIPTION_SUBTITLE,
  MAX_CLASS_DESCRIPTION_LENGTH,
} from '@/pages/instructor/classRegister/constants/registerSectionText';
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
        <Description title="클래스 설명" subTitle={CLASS_DESCRIPTION_SUBTITLE} />
        <textarea
          ref={ref}
          value={explanation}
          onInput={handleExplainTextArea}
          placeholder={CLASS_DESCRIPTION_PLACEHOLDER}
          className={textareaStyle}
          maxLength={MAX_CLASS_DESCRIPTION_LENGTH}
        />
      </div>
    );
  }
);

export default ClassDescription;
