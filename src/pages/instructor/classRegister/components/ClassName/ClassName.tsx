import type { ChangeEvent } from 'react';
import { nameLengthStyle } from '@/pages/instructor/classRegister/components/ClassName/className.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import {
  CLASS_NAME_SUBTITLE,
  MAX_CLASS_NAME_LENGTH,
} from '@/pages/instructor/classRegister/constants/registerSectionText';
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
      <Description title="클래스명" subTitle={CLASS_NAME_SUBTITLE} />
      <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 4 })}>
        <Input
          placeholder="클래스명을 입력해 주세요"
          maxLength={MAX_CLASS_NAME_LENGTH}
          onChange={handleClassNameChange}
        />
        <Text tag="c1_m" color="gray4" className={nameLengthStyle}>
          {className.length} / {MAX_CLASS_NAME_LENGTH}
        </Text>
      </div>
    </div>
  );
};

export default ClassName;
