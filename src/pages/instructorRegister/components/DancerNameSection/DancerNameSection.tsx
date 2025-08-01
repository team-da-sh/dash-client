import type { FieldError, UseFormRegister, UseFormSetError } from 'react-hook-form';
import * as styles from '@/pages/instructorRegister/components/DancerNameSection/dancerNameSection.css';
import { FORM_ERROR_MESSAGE } from '@/pages/instructorRegister/constants/registerSection';
import type { instructorRegisterFormTypes } from '@/pages/instructorRegister/types/instructorRegisterForm';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';

interface DancerNameSectionPropTypes {
  register: UseFormRegister<instructorRegisterFormTypes>;
  setError: UseFormSetError<instructorRegisterFormTypes>;
  isDataDirty: boolean | undefined;
  error: FieldError | undefined;
  dancerName: string;
}

const DancerNameSection = ({ register, setError, isDataDirty, error, dancerName }: DancerNameSectionPropTypes) => {
  console.log('error', error);
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
              // TODO: 중복 확인 API 연결 및 에러 분기 처리
              setError('dancerName', { type: 'manual', message: FORM_ERROR_MESSAGE.DUPLICATE_DANCER_NAME });
            }}>
            중복확인
          </BoxButton>
        }
      />
    </section>
  );
};

export default DancerNameSection;
