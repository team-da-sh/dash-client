import type { FieldError, UseFormRegister } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import Description from '@/pages/instructor/classRegister/components/Description';
import { CLASS_PERSONNEL_SUBTITLE } from '@/pages/instructor/classRegister/constants/registerSectionText';
import type { ClassRegisterFormTypes } from '@/pages/instructor/classRegister/types/classRegisterForm';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';
import { ONLY_NUMBER } from '@/shared/constants/regex';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface ClassPersonnelPropTypes {
  maxReservationCount: string;
  register: UseFormRegister<ClassRegisterFormTypes>;
}

const ClassPersonnel = ({ register, maxReservationCount }: ClassPersonnelPropTypes) => {
  const { name, onChange, ref } = register('maxReservationCount');
  const {
    formState: { errors },
  } = useFormContext();
  const error = errors.maxReservationCount as FieldError | undefined;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (ONLY_NUMBER.test(e.target.value)) {
      onChange(e);
    }
  };

  return (
    <div
      className={sprinkles({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 20,
        mb: 40,
      })}>
      <Description title="모집 인원" subTitle={CLASS_PERSONNEL_SUBTITLE} />
      <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 4 })}>
        <Input
          value={maxReservationCount}
          name={name}
          onChange={handleChange}
          ref={ref}
          placeholder="0"
          rightAddOn={<Text tag="b2_sb_long">명</Text>}
          isError={!!error}
        />
        {error && (
          <Text tag="b3_r" color="alert3">
            {error.message}
          </Text>
        )}
      </div>
    </div>
  );
};

export default ClassPersonnel;
