import React, { useState } from 'react';
import type { FieldError, UseFormRegister } from 'react-hook-form';
import Description from '@/pages/instructor/classRegister/components/Description';
import { MAX_RECOMMEND_LENGTH } from '@/pages/instructor/classRegister/constants/formLimit';
import {
  CLASS_RECOMMEND_PLACEHOLDER,
  CLASS_RECOMMEND_SUBTITLE,
} from '@/pages/instructor/classRegister/constants/registerSectionText';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import type { ClassRegisterFormTypes } from '../../types/classRegisterForm';

interface ClassRecommendPropTypes {
  register: UseFormRegister<ClassRegisterFormTypes>;
  handleTextAreaHeight?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: FieldError;
  recommendation?: string;
}

const ClassRecommend = ({ register, error, recommendation = '' }: ClassRecommendPropTypes) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const { name, onChange, ref } = register('recommendation');

  const handleFocusChange = (isFocused: boolean) => {
    setIsInputFocused(isFocused);
  };

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
        <Input
          name={name}
          onChange={onChange}
          ref={ref}
          isError={!!error}
          placeholder={CLASS_RECOMMEND_PLACEHOLDER}
          maxLength={MAX_RECOMMEND_LENGTH}
          onFocusChange={handleFocusChange}
          value={recommendation}
        />
        <div className={sprinkles({ display: 'flex', justifyContent: 'space-between' })}>
          <Text tag="b3_r" color="alert3">
            {error && error.message}
          </Text>
          <Text tag="c1_m" color={recommendation && isInputFocused ? 'main4' : 'gray9'}>
            {recommendation?.length || 0} / {MAX_RECOMMEND_LENGTH}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ClassRecommend;
