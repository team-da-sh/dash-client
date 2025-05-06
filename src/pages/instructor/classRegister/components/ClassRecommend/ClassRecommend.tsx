import React, { forwardRef } from 'react';
import { textareaStyle } from '@/pages/instructor/classRegister/components/ClassRecommend/classRecommend.css';
import Description from '@/pages/instructor/classRegister/components/Description';
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
        <Description title="클래스 추천 대상" subTitle="어떤 수강생에게 추천하고 싶은지 알려주세요" />
        <textarea
          ref={ref}
          value={recommend}
          onInput={handleRecommendChange}
          placeholder="EX) 프리스타일에 자신감을 가지고 싶은 분, 힙합 기본기를 탄탄하게 다지고 싶은 분 등"
          className={textareaStyle}
          maxLength={200}
        />
      </div>
    );
  }
);

export default ClassRecommend;
