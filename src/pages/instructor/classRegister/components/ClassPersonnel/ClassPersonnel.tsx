import type { ChangeEvent } from 'react';
import Description from '@/pages/instructor/classRegister/components/Description';
import Flex from '@/shared/components/Flex/Flex';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';

interface ClassPersonnelProps {
  personnel: string;
  handlePersonnelChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ClassPersonnel = ({ personnel, handlePersonnelChange }: ClassPersonnelProps) => {
  return (
    <Flex tag="section" direction="column" gap="2rem" width="100%" marginBottom="4rem">
      <Description title="모집 인원" subTitle="원활한 클래스 진행을 위해 최대 인원을 알려주세요" />
      <Input placeholder="0" value={personnel} onChange={handlePersonnelChange} rightAddOn={<Text tag="b5">명</Text>} />
    </Flex>
  );
};

export default ClassPersonnel;
