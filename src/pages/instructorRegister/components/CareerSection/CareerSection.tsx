import InputSection from '@/pages/instructorRegister/components/CareerSection/InputSection/InputSection';
import Description from '@/pages/instructorRegister/components/Description/Description';
import { INFO_KEY } from '@/pages/instructorRegister/constants/funnel';
import type { InstructorRegisterInfoTypes } from '@/pages/instructorRegister/types/InstructorRegisterInfoTypes';
import IcDocumentBlack20 from '@/shared/assets/svg/IcDocumentBlack20';
import IcGraduationBlack20 from '@/shared/assets/svg/IcGraduationBlack20';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface CareerSectionPropTypes {
  educations: string[];
  experiences: string[];
  prizes: string[];
  isEduNoneChecked: boolean;
  isCareerNoneChecked: boolean;
  isPrizeNoneChecked: boolean;
  handleEducationCheck: () => void;
  handleCareerCheck: () => void;
  handlePrizeCheck: () => void;
  onInfoChange: <K extends keyof InstructorRegisterInfoTypes>(key: K, value: InstructorRegisterInfoTypes[K]) => void;
}

const CareerSection = ({
  educations,
  experiences,
  prizes,
  onInfoChange,
  isEduNoneChecked,
  isCareerNoneChecked,
  isPrizeNoneChecked,
  handleEducationCheck,
  handleCareerCheck,
  handlePrizeCheck,
}: CareerSectionPropTypes) => {
  return (
    <div className={sprinkles({ display: 'flex', flexDirection: 'column', width: '100%', pb: 20 })}>
      <Description title="댄서 이력 등록" subTitle="춤에 관련된 것이라면 자유롭게 입력해 보세요" />

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

      <InputSection
        title="수상"
        placeholder="2018 BATTLE LIINEUP 1등"
        icon={<IcDocumentBlack20 width={'2rem'} />}
        isNoneChecked={isPrizeNoneChecked}
        onToggleActive={handlePrizeCheck}
        inputItems={prizes.map((value, id) => ({ id: id + 1, value }))}
        onItemsChange={(updatedItems) =>
          onInfoChange(
            INFO_KEY.PRIZES,
            updatedItems.map((item) => item.value)
          )
        }></InputSection>
    </div>
  );
};

export default CareerSection;
