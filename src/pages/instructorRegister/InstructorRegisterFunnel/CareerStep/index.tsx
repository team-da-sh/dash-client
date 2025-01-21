import { useState } from 'react';
import Description from '@/pages/instructorRegister/Description';
import InputSection from '@/pages/instructorRegister/InstructorRegisterFunnel/CareerStep/InputSection';
import { INFO_KEY } from '@/pages/instructorRegister/constants';
import { InstructorRegisterInfoTypes } from '@/pages/instructorRegister/types';
import { IcDocumentBlack20, IcGraduationBlack20 } from '@/assets/svg';

interface CareerStepProps {
  educations: string[];
  experiences: string[];
  onInfoChange: <K extends keyof InstructorRegisterInfoTypes>(key: K, value: InstructorRegisterInfoTypes[K]) => void;
}

const CareerStep = ({ educations, experiences, onInfoChange }: CareerStepProps) => {
  const [isEducationActive, setIsEducationActive] = useState(false);
  const [isCareerActive, setIsCareerActive] = useState(false);

  return (
    <>
      <Description title="학력 및 경력" subTitle="춤에 관련된 것이라면 자유롭게 입력해 보세요" />

      <InputSection
        title="학력"
        icon={<IcGraduationBlack20 width={'2rem'} />}
        isActive={isEducationActive}
        onToggleActive={() => setIsEducationActive((prev) => !prev)}
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
        icon={<IcDocumentBlack20 width={'2rem'} />}
        isActive={isCareerActive}
        onToggleActive={() => setIsCareerActive((prev) => !prev)}
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
