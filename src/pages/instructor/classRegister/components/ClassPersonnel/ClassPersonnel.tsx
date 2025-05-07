import type { UseFormRegister } from 'react-hook-form';
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
      <Input
        value={maxReservationCount}
        name={name}
        onChange={handleChange}
        ref={ref}
        placeholder="0"
        rightAddOn={<Text tag="b2_sb_long">명</Text>}
      />
    </div>
  );
};

export default ClassPersonnel;
