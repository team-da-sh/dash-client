import Description from '@/pages/instructorRegister/components/Description/Description';
import InputSection from '@/pages/instructorRegister/components/InstructorRegisterFunnel/CareerStep/InputSection/InputSection';
import { INFO_KEY } from '@/pages/instructorRegister/constants/funnel';
import type { InstructorRegisterInfoTypes } from '@/pages/instructorRegister/types/InstructorRegisterInfoTypes';
import IcDocumentBlack20 from '@/shared/assets/svg/IcDocumentBlack20';
import IcGraduationBlack20 from '@/shared/assets/svg/IcGraduationBlack20';

interface CareerStepPropTypes {
  educations: string[];
  experiences: string[];
  isEduNoneChecked: boolean;
  isCareerNoneChecked: boolean;
  handleEducationCheck: () => void;
  handleCareerCheck: () => void;
  onInfoChange: <K extends keyof InstructorRegisterInfoTypes>(key: K, value: InstructorRegisterInfoTypes[K]) => void;
}

const CareerStep = ({
  educations,
  experiences,
  onInfoChange,
  isEduNoneChecked,
  isCareerNoneChecked,
  handleEducationCheck,
  handleCareerCheck,
}: CareerStepPropTypes) => {
  return (
    <>
      <Description title="학력 및 경력" subTitle="춤에 관련된 것이라면 자유롭게 입력해 보세요" />

      <InputSection
        title="학력"
        placeholder="대쉬대학교 실용무용학과 졸업"
        icon={<IcGraduationBlack20 width={'2rem'} />}
        isNoneChecked={isEduNoneChecked}
        onToggleActive={handleEducationCheck}
        inputItems={educations.map((value, id) => ({ id: id + 1, value }))}
        onItemsChange={(updatedItems) =>
          onInfoChange(
            INFO_KEY.EDUCATIONS,
            updatedItems.map((item) => item.value)
          )
        }
      />

      <InputSection
        title="경력"
        placeholder="2018 BATTLE LIINEUP 1등"
        icon={<IcDocumentBlack20 width={'2rem'} />}
        isNoneChecked={isCareerNoneChecked}
        onToggleActive={handleCareerCheck}
        inputItems={experiences.map((value, id) => ({ id: id + 1, value }))}
        onItemsChange={(updatedItems) =>
          onInfoChange(
            INFO_KEY.EXPERIENCES,
            updatedItems.map((item) => item.value)
          )
        }
      />
    </>
  );
};

export default CareerStep;
