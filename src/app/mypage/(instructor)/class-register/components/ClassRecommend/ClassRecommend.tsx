import type { ChangeEvent } from 'react';
import { useState } from 'react';
import type { FieldError, UseFormRegister } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import {
  textareaStyle,
  textareaErrorStyle,
  containerStyle,
  textareaWrapperStyle,
  textareaFooterStyle,
} from '@/app/mypage/(instructor)/class-register/components/ClassRecommend/classRecommend.css';
import Description from '@/app/mypage/(instructor)/class-register/components/Description';
import { MAX_RECOMMEND_LENGTH } from '@/app/mypage/(instructor)/class-register/constants/formLimit';
import {
  CLASS_RECOMMEND_PLACEHOLDER,
  CLASS_RECOMMEND_SUBTITLE,
} from '@/app/mypage/(instructor)/class-register/constants/registerSectionText';
import Text from '@/common/components/Text/Text';
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
    <div className={containerStyle}>
      <Description title="클래스 추천 대상" subTitle={CLASS_RECOMMEND_SUBTITLE} />
      <div className={textareaWrapperStyle}>
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
        <div className={textareaFooterStyle}>
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
