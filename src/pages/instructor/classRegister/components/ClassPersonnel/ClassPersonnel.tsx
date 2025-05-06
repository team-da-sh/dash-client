import type { ChangeEvent } from 'react';
import Description from '@/pages/instructor/classRegister/components/Description';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface ClassPersonnelPropTypes {
  personnel: string;
  handlePersonnelChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ClassPersonnel = ({ personnel, handlePersonnelChange }: ClassPersonnelPropTypes) => {
  return (
    <div
      className={sprinkles({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 20,
        mb: 40,
      })}>
      <Description title="모집 인원" subTitle="원활한 클래스 진행을 위해 최대 인원을 알려주세요" />
      <Input
        placeholder="0"
        value={personnel}
        onChange={handlePersonnelChange}
        rightAddOn={<Text tag="b2_sb_long">명</Text>}
      />
    </div>
  );
};

export default ClassPersonnel;
