import React, { forwardRef } from 'react';
import { textareaStyle } from '@/pages/instructor/classRegister/components/ClassRecommend/index.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import Flex from '@/components/Flex';

interface ClassRecommendProps {
  recommend: string; // 추천 대상 텍스트
  handleRecommendChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void; // 추천 대상 변경 핸들러
}

const ClassRecommend = forwardRef<HTMLTextAreaElement, ClassRecommendProps>(
  ({ recommend, handleRecommendChange }, ref) => {
    return (
      <Flex tag="section" direction="column" gap="2rem" width="100%" marginBottom="3rem">
        <Description title="클래스 추천 대상" subTitle="어떤 수강생에게 추천하고 싶은지 알려주세요" />
        <textarea
          ref={ref}
          value={recommend}
          onInput={handleRecommendChange}
          placeholder="EX) 프리스타일에 자신감을 가지고 싶은 분, 힙합 기본기를 탄탄하게 다지고 싶은 분 등"
          className={textareaStyle}
          maxLength={200}
        />
      </Flex>
    );
  }
);

export default ClassRecommend;
