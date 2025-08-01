import type { FieldError, UseFormRegister } from 'react-hook-form';
import * as styles from '@/pages/instructorRegister/components/DancerNameSection/dancerNameSection.css';
import type { instructorRegisterFormTypes } from '@/pages/instructorRegister/types/instructorRegisterForm';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';

interface DancerNameSectionPropTypes {
  register: UseFormRegister<instructorRegisterFormTypes>;
  isDataDirty: boolean | undefined;
  error: FieldError | undefined;
  dancerName: string;
}

const DancerNameSection = ({ register, isDataDirty, error, dancerName }: DancerNameSectionPropTypes) => {
  console.log('DancerNameSection isDataDirty:', isDataDirty);
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
          <BoxButton
            className={styles.duplicateCheckButtonStyle}
            type="button"
            variant={isDataDirty ? 'primary' : 'temp'}
            onClick={() => {
              // TODO: 중복 확인 API 연결 및 에러 처리
              console.log('중복 확인 API');
            }}>
            중복확인
          </BoxButton>
        }
      />
    </section>
  );
};

export default DancerNameSection;
