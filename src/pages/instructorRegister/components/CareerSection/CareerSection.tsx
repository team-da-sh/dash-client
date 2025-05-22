import type { UseFormSetValue } from 'react-hook-form';
import InputSection from '@/pages/instructorRegister/components/CareerSection/InputSection/InputSection';
import Description from '@/pages/instructorRegister/components/Description/Description';
import {
  INSTRUCTOR_REGISTER_FORM_KEY,
  INSTRUCTOR_REGISTER_PLACEHOLDER,
  MAX_CAREER_INPUT_LENGTH,
} from '@/pages/instructorRegister/constants/registerSection';
import type { instructorRegisterFormTypes } from '@/pages/instructorRegister/types/instructorRegisterForm';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface CareerSectionPropTypes {
  educations: string[];
  experiences: string[];
  prizes: string[];
  isEduNoneChecked: boolean;
  isCareerNoneChecked: boolean;
  isPrizeNoneChecked: boolean;
  setValue: UseFormSetValue<instructorRegisterFormTypes>;
}

const CareerSection = ({
  educations,
  experiences,
  prizes,
  setValue,

  isEduNoneChecked,
  isCareerNoneChecked,
  isPrizeNoneChecked,
}: CareerSectionPropTypes) => {
  const defaultSetValueOptions = {
    shouldValidate: true,
    shouldTouch: true,
    shouldDirty: true,
  };

  return (
    <div className={sprinkles({ display: 'flex', flexDirection: 'column', width: '100%', pb: 20 })}>
      <Description title="댄서 이력 등록" subTitle="춤에 관련된 것이라면 자유롭게 입력해 보세요" />

      <InputSection
        title="학력"
        placeholder={INSTRUCTOR_REGISTER_PLACEHOLDER.EDUCATION}
        isNoneChecked={isEduNoneChecked}
        onToggleActive={() => {
          setValue(INSTRUCTOR_REGISTER_FORM_KEY.IS_EDU_NONE_CHECKED, !isEduNoneChecked, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }}
        inputItems={educations.map((value, id) => ({ id: id + 1, value }))}
        onItemsChange={(updatedItems) =>
          setValue(
            INSTRUCTOR_REGISTER_FORM_KEY.EDUCATIONS,
            updatedItems.map((item) => item.value),
            defaultSetValueOptions
          )
        }
        maxInputLength={MAX_CAREER_INPUT_LENGTH}
        key={INSTRUCTOR_REGISTER_FORM_KEY.EDUCATIONS}
      />

      <InputSection
        title="경력"
        placeholder={INSTRUCTOR_REGISTER_PLACEHOLDER.CAREER}
        isNoneChecked={isCareerNoneChecked}
        onToggleActive={() => {
          setValue(INSTRUCTOR_REGISTER_FORM_KEY.IS_CAREER_NONE_CHECKED, !isCareerNoneChecked, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }}
        inputItems={experiences.map((value, id) => ({ id: id + 1, value }))}
        onItemsChange={(updatedItems) =>
          setValue(
            INSTRUCTOR_REGISTER_FORM_KEY.EXPERIENCES,
            updatedItems.map((item) => item.value),
            defaultSetValueOptions
          )
        }
        maxInputLength={MAX_CAREER_INPUT_LENGTH}
        key={INSTRUCTOR_REGISTER_FORM_KEY.EXPERIENCES}
      />

      <InputSection
        title="수상"
        placeholder={INSTRUCTOR_REGISTER_PLACEHOLDER.PRIZE}
        isNoneChecked={isPrizeNoneChecked}
        onToggleActive={() => {
          setValue(INSTRUCTOR_REGISTER_FORM_KEY.IS_PRIZE_NONE_CHECKED, !isPrizeNoneChecked, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }}
        inputItems={prizes.map((value, id) => ({ id: id + 1, value }))}
        onItemsChange={(updatedItems) =>
          setValue(
            INSTRUCTOR_REGISTER_FORM_KEY.PRIZES,
            updatedItems.map((item) => item.value),
            defaultSetValueOptions
          )
        }
        maxInputLength={MAX_CAREER_INPUT_LENGTH}
        key={INSTRUCTOR_REGISTER_FORM_KEY.PRIZES}
      />
    </div>
  );
};

export default CareerSection;
