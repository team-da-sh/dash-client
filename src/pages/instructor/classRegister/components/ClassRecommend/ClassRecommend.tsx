import type { ChangeEvent } from 'react';
import { useState } from 'react';
import type { FieldError, UseFormRegister } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import {
  textareaStyle,
  textareaErrorStyle,
} from '@/pages/instructor/classRegister/components/ClassRecommend/classRecommend.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import { MAX_RECOMMEND_LENGTH } from '@/pages/instructor/classRegister/constants/formLimit';
import {
  CLASS_RECOMMEND_PLACEHOLDER,
  CLASS_RECOMMEND_SUBTITLE,
} from '@/pages/instructor/classRegister/constants/registerSectionText';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import type { ClassRegisterFormTypes } from '../../types/classRegisterForm';

interface ClassRecommendPropTypes {
  register: UseFormRegister<ClassRegisterFormTypes>;
  handleTextAreaHeight?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  recommendation?: string;
}

const ClassRecommend = ({ register, handleTextAreaHeight, recommendation = '' }: ClassRecommendPropTypes) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const {
    formState: { errors },
  } = useFormContext();
  const error = errors.recommendation as FieldError | undefined;

  return (
    <div
      className={sprinkles({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 20,
        mb: 30,
      })}>
      <Description title="클래스 추천 대상" subTitle={CLASS_RECOMMEND_SUBTITLE} />
      <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 4 })}>
        <textarea
          {...register('recommendation', {
            onChange: handleTextAreaHeight,
          })}
          placeholder={CLASS_RECOMMEND_PLACEHOLDER}
          className={error ? textareaErrorStyle : textareaStyle}
          maxLength={MAX_RECOMMEND_LENGTH}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />
        <div className={sprinkles({ display: 'flex', justifyContent: 'space-between' })}>
          <Text tag="b3_r" color="alert3">
            {error && error.message}
          </Text>
          <Text tag="c1_m" color={error ? 'alert3' : recommendation && isInputFocused ? 'main4' : 'gray9'}>
            {recommendation?.length || 0} / {MAX_RECOMMEND_LENGTH}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ClassRecommend;
