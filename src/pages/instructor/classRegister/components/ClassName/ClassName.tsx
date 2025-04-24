import type { ChangeEvent } from 'react';
import { nameLengthStyle } from '@/pages/instructor/classRegister/components/ClassName/className.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import Flex from '@/shared/components/Flex/Flex';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';

interface ClassNameProps {
  className: string;
  handleClassNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ClassName = ({ className, handleClassNameChange }: ClassNameProps) => {
  return (
    <Flex tag="section" direction="column" gap="2rem" width="100%" marginBottom="2rem">
      <Description title="클래스명" subTitle="돋보일 수 있는 클래스명을 최대 30자 입력해 주세요" />
      <Flex direction="column" gap="0.4rem" width="100%">
        <Input placeholder="클래스명을 입력해 주세요" maxLength={30} onChange={handleClassNameChange} />
        <Text tag="c1_m" color="gray4" className={nameLengthStyle}>
          {className.length} / 30
        </Text>
      </Flex>
    </Flex>
  );
};

export default ClassName;
