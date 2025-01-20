import { useState } from 'react';
import Description from '@/pages/instructorRegister/Description';
import { IcDocumentBlack20, IcGraduationBlack20 } from '@/assets/svg';
import { InputItemTypes } from '../../types';
import InputSection from './InputSection';

// interface CareerStepProps {
//   education: string[];
//   experience: string[];
//   onInfoChange: <K extends keyof InstructorRegisterInfoTypes>(key: K, value: InstructorRegisterInfoTypes[K]) => void;
// }

const CareerStep = () => {
  const [isEducationActive, setIsEducationActive] = useState(false);
  const [isCareerActive, setIsCareerActive] = useState(false);
  const [educationItems, setEducationItems] = useState<InputItemTypes[]>([{ id: 1, value: '' }]);
  const [careerItems, setCareerItems] = useState<InputItemTypes[]>([{ id: 1, value: '' }]);

  return (
    <>
      <Description title="학력 및 경력" subTitle="춤에 관련된 것이라면 자유롭게 입력해 보세요" />

      <InputSection
        title="학력"
        icon={<IcGraduationBlack20 width={'2rem'} />}
        isActive={isEducationActive}
        onToggleActive={() => setIsEducationActive((prev) => !prev)}
        inputItems={educationItems}
        setInputItems={setEducationItems}
      />

      <InputSection
        title="경력"
        icon={<IcDocumentBlack20 width={'2rem'} />}
        isActive={isCareerActive}
        onToggleActive={() => setIsCareerActive((prev) => !prev)}
        inputItems={careerItems}
        setInputItems={setCareerItems}
      />
    </>
  );
};

export default CareerStep;
