import React, { forwardRef } from 'react';
import { textareaStyle } from '@/pages/instructor/classRegister/components/ClassRecommend/classRecommend.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import {
  CLASS_RECOMMEND_PLACEHOLDER,
  CLASS_RECOMMEND_SUBTITLE,
  MAX_RECOMMEND_LENGTH,
} from '@/pages/instructor/classRegister/constants/registerSection';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface ClassRecommendPropTypes {
  recommend: string;
  handleRecommendChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ClassRecommend = forwardRef<HTMLTextAreaElement, ClassRecommendPropTypes>(
  ({ recommend, handleRecommendChange }, ref) => {
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
          ref={ref}
          value={recommend}
          onInput={handleRecommendChange}
          placeholder={CLASS_RECOMMEND_PLACEHOLDER}
          className={textareaStyle}
          maxLength={MAX_RECOMMEND_LENGTH}
        />
      </div>
    );
  }
);

export default ClassRecommend;
