import type { ChangeEvent } from 'react';
import type { FieldError, UseFormRegister } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import Description from '@/app/my/(instructor)/create-class/components/Description';
import { CLASS_AMOUNT_SUBTITLE } from '@/app/my/(instructor)/create-class/constants/registerSectionText';
import Input from '@/common/components/Input/Input';
import Text from '@/common/components/Text/Text';
import { ONLY_NUMBER } from '@/shared/constants/regex';
import type { ClassRegisterFormTypes } from '../../types/classRegisterForm';

interface ClassAmountPropTypes {
  price: string;
  register: UseFormRegister<ClassRegisterFormTypes>;
}

const ClassAmount = ({ price, register }: ClassAmountPropTypes) => {
  const { name, onChange, ref } = register('price');
  const {
    formState: { errors },
  } = useFormContext();
  const error = errors.price as FieldError | undefined;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (ONLY_NUMBER.test(e.target.value)) {
      onChange(e);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
      <Description title="수강료" subTitle={CLASS_AMOUNT_SUBTITLE} />
      <Input
        name={name}
        ref={ref}
        placeholder="0"
        value={price}
        onChange={handleChange}
        rightAddOn={<Text tag="b2_sb_long">원</Text>}
        isError={!!error}
        helperText={error?.message}
        maxLength={9}
      />
    </div>
  );
};

export default ClassAmount;
