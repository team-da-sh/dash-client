import type { FieldError, UseFormRegister } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import {
  containerStyle,
  inputStyle,
} from '@/app/mypage/(instructor)/class-register/components/ClassName/className.css';
import Description from '@/app/mypage/(instructor)/class-register/components/Description';
import { MAX_CLASS_NAME_LENGTH } from '@/app/mypage/(instructor)/class-register/constants/formLimit';
import { CLASS_NAME_SUBTITLE } from '@/app/mypage/(instructor)/class-register/constants/registerSectionText';
import type { ClassRegisterFormTypes } from '@/app/mypage/(instructor)/class-register/types/classRegisterForm';
import Input from '@/common/components/Input/Input';

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
    <div className={containerStyle}>
      <Description title="클래스명" subTitle={CLASS_NAME_SUBTITLE} />
      <Input
        name={name}
        onChange={onChange}
        ref={ref}
        isError={!!error}
        helperText={error?.message}
        value={className}
        showMaxLength={true}
        className={inputStyle}
        placeholder="클래스명을 입력해 주세요"
        maxLength={MAX_CLASS_NAME_LENGTH}
      />
    </div>
  );
};

export default ClassName;
