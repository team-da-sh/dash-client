import type { ChangeEvent } from 'react';
import { nameLengthStyle } from '@/pages/instructor/classRegister/components/ClassName/className.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface ClassNamePropTypes {
  className: string;
  handleClassNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ClassName = ({ className, handleClassNameChange }: ClassNamePropTypes) => {
  return (
    <div
      className={sprinkles({
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        width: '100%',
        mb: 20,
      })}>
      <Description title="클래스명" subTitle="돋보일 수 있는 클래스명을 최대 30자 입력해 주세요" />
      <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 4 })}>
        <Input placeholder="클래스명을 입력해 주세요" maxLength={30} onChange={handleClassNameChange} />
        <Text tag="c1_m" color="gray4" className={nameLengthStyle}>
          {className.length} / 30
        </Text>
      </div>
    </div>
  );
};

export default ClassName;
