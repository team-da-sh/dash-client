import type { FieldError, UseFormRegister } from 'react-hook-form';
import { nameLengthStyle } from '@/pages/instructor/classRegister/components/ClassName/className.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import { MAX_CLASS_NAME_LENGTH } from '@/pages/instructor/classRegister/constants/formLimit';
import { CLASS_NAME_SUBTITLE } from '@/pages/instructor/classRegister/constants/registerSectionText';
import type { ClassRegisterFormTypes } from '@/pages/instructor/classRegister/types/classRegisterForm';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface ClassNamePropTypes {
  className: string;
  register: UseFormRegister<ClassRegisterFormTypes>;
  error: FieldError | undefined;
}

const ClassName = ({ register, error, className }: ClassNamePropTypes) => {
  const { name, onChange, ref } = register('className');

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
          name={name}
          onChange={onChange}
          ref={ref}
          isError={!!error}
          placeholder="클래스명을 입력해 주세요"
          maxLength={MAX_CLASS_NAME_LENGTH}
        />
        <div className={sprinkles({ display: 'flex', justifyContent: 'space-between' })}>
          <Text tag="b3_r" color="alert3">
            {error && error.message}
          </Text>
          <Text tag="c1_m" color={className ? 'gray9' : 'gray4'} className={nameLengthStyle}>
            {className.length} / {MAX_CLASS_NAME_LENGTH}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ClassName;
