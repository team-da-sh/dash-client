import type { FieldError, UseFormRegister } from 'react-hook-form';
import * as styles from '@/pages/instructorRegister/components/DancerNameSection/dancerNameSection.css';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';
import type { instructorRegisterFormTypes } from '../../types/instructorRegisterForm';

interface DancerNameSectionPropTypes {
  dancerName: string;
  register: UseFormRegister<instructorRegisterFormTypes>;
  error: FieldError | undefined;
}

const DancerNameSection = ({ dancerName, register, error }: DancerNameSectionPropTypes) => {
  return (
    <section className={styles.containerStyle}>
      <Text tag="b2_sb">댄서네임</Text>
      <Input
        {...register('dancerName')}
        isError={!!error}
        helperText={error?.message}
        value={dancerName}
        showMaxLength={true}
        placeholder="나는대쉬"
        maxLength={8}
        rightAddOn={
          <BoxButton className={styles.duplicateCheckButtonStyle} type="button" variant="temp">
            중복확인
          </BoxButton>
        }
      />
      <BoxButton type="button" variant="temp">
        중복확인
      </BoxButton>
    </section>
  );
};

export default DancerNameSection;
