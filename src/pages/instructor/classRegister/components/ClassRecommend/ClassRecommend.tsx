import React from 'react';
import type { UseFormRegister } from 'react-hook-form';
import { textareaStyle } from '@/pages/instructor/classRegister/components/ClassRecommend/classRecommend.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import { MAX_RECOMMEND_LENGTH } from '@/pages/instructor/classRegister/constants/formLimit';
import {
  CLASS_RECOMMEND_PLACEHOLDER,
  CLASS_RECOMMEND_SUBTITLE,
} from '@/pages/instructor/classRegister/constants/registerSectionText';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import type { ClassRegisterFormTypes } from '../../types/classRegisterForm';

interface ClassRecommendPropTypes {
  register: UseFormRegister<ClassRegisterFormTypes>;
  handleTextAreaHeight: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ClassRecommend = ({ register, handleTextAreaHeight }: ClassRecommendPropTypes) => {
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
      <textarea
        {...register('recommendation', {
          onChange: handleTextAreaHeight,
        })}
        placeholder={CLASS_RECOMMEND_PLACEHOLDER}
        className={textareaStyle}
        maxLength={MAX_RECOMMEND_LENGTH}
      />
    </div>
  );
};

export default ClassRecommend;
