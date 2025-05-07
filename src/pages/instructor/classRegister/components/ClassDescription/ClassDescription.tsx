import React from 'react';
import type { FieldError, UseFormRegister } from 'react-hook-form';
import { textareaStyle } from '@/pages/instructor/classRegister/components/ClassDescription/classDescription.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import { MAX_CLASS_DESCRIPTION_LENGTH } from '@/pages/instructor/classRegister/constants/formLimit';
import {
  CLASS_DESCRIPTION_PLACEHOLDER,
  CLASS_DESCRIPTION_SUBTITLE,
} from '@/pages/instructor/classRegister/constants/registerSectionText';
import type { ClassRegisterFormTypes } from '@/pages/instructor/classRegister/types/classRegisterForm';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface ClassDescriptionPropTypes {
  register: UseFormRegister<ClassRegisterFormTypes>;
  error: FieldError | undefined;
  handleTextAreaHeight: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ClassDescription = ({ register, handleTextAreaHeight }: ClassDescriptionPropTypes) => {
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
        {...register('detail', {
          onChange: handleTextAreaHeight,
        })}
        placeholder={CLASS_DESCRIPTION_PLACEHOLDER}
        className={textareaStyle}
        maxLength={MAX_CLASS_DESCRIPTION_LENGTH}
      />
    </div>
  );
};

export default ClassDescription;
