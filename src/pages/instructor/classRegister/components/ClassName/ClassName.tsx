import type { FieldError, UseFormRegister } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import Description from '@/pages/instructor/classRegister/components/Description';
import { MAX_CLASS_NAME_LENGTH } from '@/pages/instructor/classRegister/constants/formLimit';
import { CLASS_NAME_SUBTITLE } from '@/pages/instructor/classRegister/constants/registerSectionText';
import type { ClassRegisterFormTypes } from '@/pages/instructor/classRegister/types/classRegisterForm';
import Input from '@/shared/components/Input/Input';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface ClassNamePropTypes {
  className: string;
  register: UseFormRegister<ClassRegisterFormTypes>;
}

const ClassName = ({ register, className }: ClassNamePropTypes) => {
  const { name, onChange, ref } = register('className');
  const {
    formState: { errors },
  } = useFormContext();
  const error = errors.className as FieldError | undefined;

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
      <Input
        name={name}
        onChange={onChange}
        ref={ref}
        isError={!!error}
        helperText={error?.message}
        value={className}
        showMaxLength={true}
        className={sprinkles({ width: '100%' })}
        placeholder="클래스명을 입력해 주세요"
        maxLength={MAX_CLASS_NAME_LENGTH}
      />
    </div>
  );
};

export default ClassName;
