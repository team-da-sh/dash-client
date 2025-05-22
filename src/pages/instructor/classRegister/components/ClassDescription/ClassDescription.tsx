import type { ChangeEvent } from 'react';
import { useState } from 'react';
import type { FieldError, UseFormRegister } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import {
  textareaStyle,
  textareaErrorStyle,
} from '@/pages/instructor/classRegister/components/ClassDescription/classDescription.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import { MAX_CLASS_DESCRIPTION_LENGTH } from '@/pages/instructor/classRegister/constants/formLimit';
import {
  CLASS_DESCRIPTION_PLACEHOLDER,
  CLASS_DESCRIPTION_SUBTITLE,
} from '@/pages/instructor/classRegister/constants/registerSectionText';
import type { ClassRegisterFormTypes } from '@/pages/instructor/classRegister/types/classRegisterForm';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface ClassDescriptionPropTypes {
  register: UseFormRegister<ClassRegisterFormTypes>;
  handleTextAreaHeight?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  detail?: string;
}

const ClassDescription = ({ register, handleTextAreaHeight, detail = '' }: ClassDescriptionPropTypes) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const {
    formState: { errors },
  } = useFormContext();
  const error = errors.detail as FieldError | undefined;

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
      <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 4 })}>
        <textarea
          {...register('detail', {
            onChange: handleTextAreaHeight,
          })}
          placeholder={CLASS_DESCRIPTION_PLACEHOLDER}
          className={error ? textareaErrorStyle : textareaStyle}
          maxLength={MAX_CLASS_DESCRIPTION_LENGTH}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />
        <div className={sprinkles({ display: 'flex', justifyContent: 'space-between' })}>
          <Text tag="b3_r" color="alert3">
            {error && error.message}
          </Text>
          <Text tag="c1_m" color={error ? 'alert3' : detail && isInputFocused ? 'main4' : 'gray9'}>
            {detail?.length || 0} / {MAX_CLASS_DESCRIPTION_LENGTH}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ClassDescription;
